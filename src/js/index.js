import '../assets/style.css';
import MainPhoto from '../assets/images/pexels-shvetsa-3727474.jpg';
import GitHubIcon from '../assets/icons/github.svg';
import LinkedlnIcon from '../assets/icons/linkedin.svg';
import TwitterIcon from '../assets/icons/twitter.svg';

document.getElementById('main-photo').setAttribute('src', MainPhoto);

Array.from(document.getElementsByClassName('github-btn')).forEach(element => {
    element.setAttribute('src', GitHubIcon);
});

Array.from(document.getElementsByClassName('linkedln-btn')).forEach(element => {
    element.setAttribute('src', LinkedlnIcon);
});

Array.from(document.getElementsByClassName('twitter-btn')).forEach(element => {
    element.setAttribute('src', TwitterIcon);
});