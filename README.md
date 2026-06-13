this is css file same as tailwind css
now update . 
and modified.

# git command.
### For download repo from github
1. git clone "url"
### for track file after modified
1. git add "file name"
### for track all file which modified
1. git add .
2. git commit -m "message"
3. git commit -am "message"
4. git push origin main
### make git repo for new folder which create inside only local pc. which is not create github till now.
1. cd "folder name"
2. git init
( Now you can create file and folder inside this folder) after changes
3. git add .
4. git commit -m "meaasage"
( after commit , for push this folder on github. firstly create folder from any name in github without readme file. ) then after
5. git remote add origin "github folder Link"
6. git remote -v   # for veryfy remote
7. git branch   # to check branch
8. git branch -M main      # to rename branch
9. git push origin main     # for push all files and folder on github folder
# If to save "origin main" location then apply thease command
10. git push -u origin main
# After this use only "git push" command for push all files.
11. git push