// To generate SSH keys for github
// ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
// https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

/*
 Example Test Post:

 ---
 author: Trevor Lane  
 title:  My First Post
 date:   12/01/1985 
 image:  https://i.imgur.com/ZBqmTXz.png
 authorImage: https://avatars.githubusercontent.com/u/15148900
 tags: blog, writing, post 
 ---

POST LIST EXAMPLE:

[{
   "name":"first post",
   "gist_id": "5d0c8819cf46fea931bb089aa566d227"
}]

*/

const siteData =  {
  "title": "My New Blog",
  "description":"Description",
  "githubUsername":"trevors-test-account",
  "baseUrl":"https://blog.trevorlane.dev",
  "showSocialShareLinks": true,
  'gistListId':'0b4696ebf0b59add79952c2b3fcec7d1',
  'useCTA': true,
  "home_site_url":{ 
    "link": "https://google.com",
    "name": "google"
  }
}

export default siteData