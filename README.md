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
# for add new branch
12. git checkout -b newbranchname
13. git checkout branchname     # to change branch
14. git branch      # to check branch name
15. git branch -d branchname        # to delete branch ( firstly checkout )
16. git push origin branchname         # to push current branch data
# for compare and find diffrence between all branches
17. git diff otherbranchname
18. git merge branchname        # to merge both branch
### for seen or get changes as merge or other by github 
19. git pull origin main
### for reset or go back to changes
20. git reset           # to reset changes
21. git reset HEAD~1        # to reset and go before last commit
22. git log     # to check and read all commit ( note: for quit log , type "q" and enter)
23. git reset commit-hash-name         # for reset on perticular commit with hash name/number
24. git reset --hard commit-hash-name   # for remove all commit changes from IDE till perticular hash name.
# FORK ( create a rough repo copy of perticular repo)