# Session 1

## Part 1 - git

### CLI - command line interface
A command-line interface (CLI) is a means of interacting with a computer program by inputting lines of text called command-lines. 

### OS commands
- ls (list): list the current directory
- cd (change directory): change the working directory
- pwd (print working directory): displays the working directory

### Create a new repository on the command line 
- echo "# project name" >> README.md *(the command creates a readme markdown file and inserts the text specified between quotes)*
- git init *(initialises a local repository)*
- git add . *(adds files to the next commit. The dot symbol means all uncommited files - changnged / not yet added / deleted)*
- git commit -m "relevant message" *(creates a new commit)*
- git branch -M main *(renames the current branch to "main")*
- git remote add origin https://github.com/user-name/remote-repo.git *(links the local repository to a new remote repository)*
- git push -u origin main *(push the commits to the remote repo and the current branch is linked to the remote main branch)*


### Cloning a remote repository**
- git clone https://github.com/user-name/remote-repo.git . *(the dot clones the repo contant into the current working directory, without creating the repo folder)*

