---
name: deploy
description: Deploy the watim site to the production server (pull, install, build, pm2 restart) and verify the live site. Use when the user says deploy, ship it, put it live, or run deploy.sh.
---

# Deploy watim to production

The production server is reachable as the SSH host alias `watm-server`
(defined in `~/.ssh/config` on this machine; key-based auth, no password).
The app lives at `/var/www/my-next-app` and runs under pm2 as `watim`.

## Steps

1. Make sure everything intended to ship is committed and pushed to
   `origin/main` — the server deploys from GitHub, not from this machine.
   If the working tree is dirty, ask the user before proceeding.

2. Run the deploy (long-running: install + build can take a few minutes):

   ```bash
   ssh watm-server '/var/www/my-next-app/deploy.sh' 2>&1 | tail -30
   ```

   The script aborts on the first failure and never restarts pm2 on a
   broken build, so a failed run leaves the old version live.

3. Verify the live site:

   ```bash
   curl -sL -o /dev/null -w "%{http_code}" https://watm.com.sa/
   ```

   Expect 200. When the deploy shipped a specific change, also curl a page
   that proves it (e.g. grep the homepage HTML for a new string or route).

4. Report the pm2 status line from the script output and what was verified.

## If SSH fails

- `Permission denied (publickey)`: the user's key isn't on the server yet —
  tell them to run `ssh-copy-id watm-server` once in their own terminal
  (it will ask for the root password one time).
- Timeouts: the server may be down or the IP changed; ask the user.
