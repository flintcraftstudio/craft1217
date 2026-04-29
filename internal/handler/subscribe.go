package handler

import (
	"errors"
	"log/slog"
	"net/http"
	"net/mail"
	"strings"

	"github.com/flintcraftstudio/standard-template/internal/store"
	"github.com/flintcraftstudio/standard-template/internal/view"
)

// Subscribe handles POST /subscribe from the coming-soon page. The form
// is htmx-powered, so success and error states render as a partial that
// swaps in for #subscribe-block.
func Subscribe(st *store.Store) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := r.ParseForm(); err != nil {
			http.Error(w, "bad request", http.StatusBadRequest)
			return
		}

		email := strings.TrimSpace(r.FormValue("email"))
		state := view.SubscribeFormState{Email: email}

		if email == "" {
			state.Error = "Please enter your email."
			renderSubscribe(w, r, state)
			return
		}
		if _, err := mail.ParseAddress(email); err != nil {
			state.Error = "Please enter a valid email."
			renderSubscribe(w, r, state)
			return
		}

		err := st.CreateSubscriber(r.Context(), email)
		if err != nil && !errors.Is(err, store.ErrSubscriberExists) {
			slog.Error("create subscriber", "err", err)
			state.Error = "Something went wrong. Please try again."
			renderSubscribe(w, r, state)
			return
		}

		// Treat duplicate as success — same UX, no enumeration signal.
		renderSubscribe(w, r, view.SubscribeFormState{Success: true})
	}
}

func renderSubscribe(w http.ResponseWriter, r *http.Request, s view.SubscribeFormState) {
	if err := view.SubscribeForm(s).Render(r.Context(), w); err != nil {
		slog.Error("render error", "err", err)
	}
}
