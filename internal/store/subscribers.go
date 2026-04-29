package store

import (
	"context"
	"errors"
	"strings"
)

// ErrSubscriberExists is returned when an email is already on the list.
// The handler treats this as a soft success — the user gets the same
// "we'll write soon" confirmation either way.
var ErrSubscriberExists = errors.New("subscriber already exists")

func (s *Store) CreateSubscriber(ctx context.Context, email string) error {
	email = strings.ToLower(strings.TrimSpace(email))
	if email == "" {
		return errors.New("email is required")
	}
	_, err := s.db.ExecContext(ctx,
		"INSERT INTO subscribers (email) VALUES (?)",
		email,
	)
	if err != nil {
		// modernc/sqlite returns the raw SQLite error message; the UNIQUE
		// violation surfaces as "constraint failed: UNIQUE constraint failed: ...".
		if strings.Contains(err.Error(), "UNIQUE constraint failed") {
			return ErrSubscriberExists
		}
		return err
	}
	return nil
}

func (s *Store) CountSubscribers(ctx context.Context) (int, error) {
	var n int
	err := s.db.QueryRowContext(ctx, "SELECT COUNT(*) FROM subscribers").Scan(&n)
	return n, err
}
