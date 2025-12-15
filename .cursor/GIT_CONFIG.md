# Git Configuration

## Repository-Specific Git User

This repository has local git user configuration set to ensure all commits are attributed to the correct author.

### Current Configuration
- **Name:** XcluEzy7
- **Email:** garciaantoine.erik@gmail.com

### Configuration Location
The git user configuration is set locally for this repository in `.git/config`:
```ini
[user]
    name = XcluEzy7
    email = garciaantoine.erik@gmail.com
```

### Verification
To verify the git user configuration for this repository:
```bash
git config user.name
git config user.email
```

### Updating Configuration
If you need to update the git user for this repository:
```bash
git config --local user.name "Your Name"
git config --local user.email "your.email@example.com"
```

### Note
- Local repository configuration takes precedence over global configuration
- This ensures commits in this repository always use the correct author identity
- Global git config remains unchanged and can be used for other repositories

