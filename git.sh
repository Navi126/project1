er for commit message
read -p "Enter commit message: " commit_message

# Stage all changes
git add .

# Commit with user's message
git commit -m "$commit_message"

# Push to main branch
git push origin main

