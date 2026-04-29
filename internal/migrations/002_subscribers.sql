-- +goose Up

CREATE TABLE subscribers (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    email      TEXT    NOT NULL UNIQUE COLLATE NOCASE,
    created_at TEXT    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_subscribers_created ON subscribers(created_at DESC);

-- +goose Down

DROP INDEX IF EXISTS idx_subscribers_created;
DROP TABLE subscribers;
