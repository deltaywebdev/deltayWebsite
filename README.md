# DeltaY Website
Our company website

## Info
This sites frontend was built with Vite + React + Typescript and uses react-router to control page routing in React.
Axios is used for communication with the backend, which consists of PHP (PDO) and MySQL.

## Getting Started
Refer to this [Git Tutorial](https://www.atlassian.com/git/tutorials) for a comprehensive guide.

### Cloning Repository
1. **Create a new folder for the website code on your machine**

   Open your file explorer and create a new folder in a location of your choice. You can name it anything you like, e.g., "DeltaY."

2. **Go to the folder, right-click (Windows 11: Show more options), and select `Open Git Bash here`**

   **Note: you need to install [Git Bash](https://gitforwindows.org/) before the option appears**

3. **Generate SSH Key (If not already done)**

   If you haven't generated an SSH key for your GitHub account before, you can do so by running the following command in the Git Bash terminal. Replace `"your-github@email.example"` with your actual GitHub email address.

   ```shell
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```

   When prompted, press Enter to use the default file location and leave the passphrase empty.

4. **Add SSH Key to you Github account**

   If you haven't added the SSH key to your github you can do it by going under **Github/Settings/SSH and GPG Keys/New SSH** and then paste the public key there

   you can find your public key if you do:

    ```shell
   cat ~/.ssh/id_rsa.pub
   ```
   make sure to copy the entire key and post it into the coresponidng box

5. **Configure Git with Your GitHub Account**

   If you haven't configured Git with your GitHub account, you need to set your GitHub username and email in Git. Run the following commands in the Git Bash terminal, replacing `"Your Name"` and `"your-github@email.example"` with your actual GitHub username and email:

   ```shell
   git config --global user.name "Your Name"
   git config --global user.email "your-github@email.example"
   ```
6. **Clone the Repository**

   Go to the [DeltaY Website Repository](https://github.com/deltaywebdev/website).

   Click on the "Code" button and select "Local" > "SSH" to switch to the SSH URL.

   Copy the SSH URL of the repository (e.g., `git@github.com:deltaywebdev/website.git`).

   Back in your Git Bash terminal, run the following command to clone the repository into your newly created folder:

   ```shell
   git clone git@github.com:deltaywebdev/website.git
   ```

   This will download the repository to your local machine.

7. **Install Dependencies**

   Change your working directory to the cloned repository folder:

   ```shell
   cd website
   ```

   Once inside the project folder, run the following command to install the project's dependencies using npm:

   ```shell
   npm install
   ```

   
   This will install all the necessary packages and dependencies for the DeltaY Website project.

   **Note**: if you get the error "package.json" not found you may need to navigate into the frontend folder using:

   ```shell
   cd frontend
   ```

### Making Changes
1. **Create a New Branch**

   Before making changes, it's a good practice to create a new branch for your work. You can do this using the following command:

   ```shell
   git checkout -b your-branch-name
   ```

   Replace `your-branch-name` with a descriptive name for your branch.

2. **Make Changes**

   You can now make changes to the code in the DeltaY Website project folder using your preferred code editor.

3. **Setting Up Remote**

    If you haven't configured the remote repository, you can do so with the following command:

    ```shell
    git remote add origin git@github.com:deltaywebdev/website.git
    ```

    This associates your local repository with the remote repository on GitHub.

4. **Add GIT to Visual Studio Code**
   If you use Visual studio Code you need to enable git, first create a instance of Git in your Folger using:

    ```shell
   git init
   ```
   After that you navigate to File > Preferences > Settings > Type git:enabled into the search box > Make sure the box is enabled

 
5. **Commit Changes**

   After making changes, open your Git Bash terminal again, navigate to the project folder if you're not already there, and run the following commands to commit your changes:

   ```shell
   git add .
   git commit -m "Your commit message here"
   ```

   Replace `"Your commit message here"` with a brief description of the changes you made.

6. **Push Changes to GitHub**

   To push your committed changes to the GitHub repository, use the following command:

   ```shell
   git push origin your-branch-name
   ```

7. **Merging Your Branch**

    If you're ready to merge your changes into the main branch, you can create a pull request on the GitHub repository's website. Once your changes are reviewed and approved, they can be merged into the main branch.
