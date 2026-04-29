const blogs = {
  1: {
    title: "How to Start a Blog",
    text: "Starting a blog is easy in 2026. Choose a niche, create content, and stay consistent. Blogging can help you build skills and earn money."
  },
  2: {
    title: "Earn Money from Blogging",
    text: "You can earn from blogging using ads, affiliate marketing and sponsorships. Focus on quality content and traffic."
  },
  3: {
    title: "SEO Tips for Beginners",
    text: "Use keywords, write helpful content and make your website fast. SEO helps your site rank on Google."
  }
};

function showBlog(id) {
  document.getElementById("blogTitle").innerText = blogs[id].title;
  document.getElementById("blogText").innerText = blogs[id].text;
  document.getElementById("blogModal").style.display = "block";
}

function closeBlog() {
  document.getElementById("blogModal").style.display = "none";
}