const linksSocialMedia = {
  github: 'lucio-iot-dev',
  whatsapp: 'send?phone=5532991984361.',
  instagram: 'luciojf_ti/',
  linkedin: 'in/l%C3%BAcio-nascimento-8868101ba/',
  google: ''
}

function changesSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changesSocialMediaLinks()

function changesSocialWhatsapp() {
  // console.log(zap)
  zap.href = `http://api.whatsapp.com/${linksSocialMedia.whatsapp}`
}

changesSocialWhatsapp()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
