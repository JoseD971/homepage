import '../assets/style.css';
import MainPhoto from '../assets/images/pexels-shvetsa-3727474.jpg';
import GitHubIcon from '../assets/icons/github.svg';
import LinkedlnIcon from '../assets/icons/linkedin.svg';
import TwitterIcon from '../assets/icons/twitter.svg';
import OpenNewTabIcon from '../assets/icons/open-in-new.svg';
import FooterPhoto from '../assets/images/pexels-shvetsa-3727464.jpg';
import PhoneIcon from '../assets/icons/phone-outline.svg';
import EmailIcon from '../assets/icons/email-outline.svg';

document.getElementById('main-photo').setAttribute('src', MainPhoto);
document.getElementById('footer-photo').setAttribute('src', FooterPhoto);

Array.from(document.getElementsByClassName('github-icon')).forEach(element => {
    element.setAttribute('src', GitHubIcon);
});

Array.from(document.getElementsByClassName('linkedln-icon')).forEach(element => {
    element.setAttribute('src', LinkedlnIcon);
});

Array.from(document.getElementsByClassName('twitter-icon')).forEach(element => {
    element.setAttribute('src', TwitterIcon);
});

Array.from(document.getElementsByClassName('open-new-tab-icon')).forEach(element => {
    element.setAttribute('src', OpenNewTabIcon);
});

Array.from(document.getElementsByClassName('phone-icon')).forEach(element => {
    element.setAttribute('src', PhoneIcon);
});

Array.from(document.getElementsByClassName('email-icon')).forEach(element => {
    element.setAttribute('src', EmailIcon);
});