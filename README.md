# Web-dev-Project2-KeyMasters


Here are the notes from today:
CINF 301   3/27/23

FRONTEND:
 - Scavenger hunt using URL on QR code or a clue
 - Upon visiting URL, web site asks for team name (which might be
 new/unseen before) //need a solution here to avoid duplicates and typos

 - add team name to DB
 - remember timestamps for all records
 - clue might have a description or hint for the next step;  show this text if it exists in DB 
 - ADMIN LOGIN to website only
 - show leaderboard on the website
 - teams and rankings (to be defined later)
 - Choose interesting theme but keep it maximally minimal.  Make it look nice

 BACKEND:
 - deploy frontend features
 - create API that allows an authenticated admin to upload JSON that has all clue URLs and their descriptions
 - Authentication can simply be a pre-shared key   //maybe not
 - URLs will always be of form: https://sshqr.com/[random letters]
 - API does not need to be available from the frontend
 - Host on AWS (free account is probably fine)
 - Create letsencrypt cert, serve over https


From my first look at letsencrypt.org:

If we have shell access, we can install the Certbot ACME client on the server, which will automate certificate issuance and installation.  

To get full instructions, you need to know specific software and OS for the
HTTP website.  visit https://certbot.eff.org and select from dropdowns.

Installation if running Ubuntu 20 uses ssh and snap using latest snapd
version.
