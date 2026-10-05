# Changelog

Bayside's fork of [bradcerb/rock-magnus-cli](https://github.com/bradcerb/rock-magnus-cli), forked at
`ef2834f` on 2026-10-05 for the project factory's unattended agents. Upstream changes are reviewed
and merged by hand; nothing is pulled automatically.

## 2026-10-05

- Two credential modes for unattended use, chosen by environment variable, with the normal login
  unchanged when neither is set. `MAGNUS_API_KEY` sends a Rock REST key as `Authorization-Token`
  and never logs in. `MAGNUS_AUTH=proxy` sends no credential at all, for a proxy that adds it, so
  the process running Magnus never holds one.
