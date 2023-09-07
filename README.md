# DeltaY Website
Our company website

## Info
This site was built with Vite + React + Typescript and uses react-router to control page routing in React.

## Getting Started
Refer to this [Git Tutorial](https://www.atlassian.com/git/tutorials) for a comprehensive guide.

### Cloning Repository
1. **Create a new folder for the website code on your machine**

   Open your file explorer and create a new folder in a location of your choice. You can name it anything you like, e.g., "DeltaY."

2. **Go to the folder, right-click (Windows 11: Show more options), and select `Git Bash here`**

3. **Generate SSH Key (If not already done)**

   If you haven't generated an SSH key for your GitHub account before, you can do so by running the following command in the Git Bash terminal. Replace `"your-github@email.example"` with your actual GitHub email address.

   ```shell
   ssh-keygen -t ed25519 -C "your-github@email.example"
   ```

   When prompted, press Enter to use the default file location and leave the passphrase empty.

4. **Configure Git with Your GitHub Account**

   If you haven't configured Git with your GitHub account, you need to set your GitHub username and email in Git. Run the following commands in the Git Bash terminal, replacing `"Your Name"` and `"your-github@email.example"` with your actual GitHub username and email:

   ```shell
   git config --global user.name "Your Name"
   git config --global user.email "your-github@email.example"

5. **Clone the Repository**

   Go to the [DeltaY Website Repository](https://github.com/deltaywebdev/website).

   Click on the "Code" button and select "Local" > "SSH" to switch to the SSH URL.

   Copy the SSH URL of the repository (e.g., `git@github.com:deltaywebdev/website.git`).

   Back in your Git Bash terminal, run the following command to clone the repository into your newly created folder:

   ```shell
   git clone git@github.com:deltaywebdev/website.git
   ```

   This will download the repository to your local machine.

6. **Install Dependencies**

   Change your working directory to the cloned repository folder:

   ```shell
   cd website
   ```

   Once inside the project folder, run the following command to install the project's dependencies using npm:

   ```shell
   npm install
   ```

   This will install all the necessary packages and dependencies for the DeltaY Website project.

### Making Changes
7. **Make Changes**

   You can now make changes to the code in the DeltaY Website project folder using your preferred code editor.

8. **Commit Changes**

   After making changes, open your Git Bash terminal again, navigate to the project folder if you're not already there, and run the following commands to commit your changes:

   ```shell
   git add .
   git commit -m "Your commit message here"
   ```

   Replace `"Your commit message here"` with a brief description of the changes you made.

9. **Push Changes to GitHub**

   To push your committed changes to the GitHub repository, use the following command:

   ```shell
   git push
   ```

   You may be prompted to log in to your GitHub account.

10. **Setting Up Remote (Optional)**

    If you haven't configured the remote repository, you can do so with the following command:

    ```shell
    git remote add origin git@github.com:deltaywebdev/website.git
    ```

    This associates your local repository with the remote repository on GitHub.
