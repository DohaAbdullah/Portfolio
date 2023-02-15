import IconGithub from "../icons/iconGithub";

function MainPage() {
  return (
    <div className="container">
      <p className="name">MAWUENA M KODZO</p>
      <p className="title">Personal website & blog </p>
      <div className="content">
        <p className="about-me-title">About me</p>
        <p>
          My name is Mawuena M Kodzo, I am from Togo I’m a full stack software
          engineer specializing in designing and/or building exceptional digital
          experiences. I’m studying for my DUT Exams, and to take Azure and
          Cisco CCNA certs. I'm working currently on SmartBin. You can reach me
          at contact@mawuena.me. I am glad to share and communicate with you.
        </p>
        <p>
          I really enjoy coumputer stuff, building, deploy app and maintain
          them. I love FOSS projects. Opensource bring me on software
          developement. My interest in software development started back in 2014
          when I install Linux distro (Ubuntu) on my couputer, I decided to
          learn python to create script that auto removed files in bin after
          days i defined!
        </p>
        <p>
          I'm also posting my blog posts on DEV.to, so you can find them there
          as well.
        </p>
        <table className="table">
          <thead>
            <tr>
              <td>
                <p className="table-title"> Technologies I’ve been working</p>
              </td>
              <td>
                <p className="table-title"> Technologies I’ve been working</p>
              </td>
              <td>
                <p className="table-title"> Technologies I’ve been working</p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="column">
                <ul className="about-list">
                  <li>MapBox Gl</li>
                  <li>Arduino</li>
                  <li>Python</li>
                  <li>MQTT</li>
                  <li>Vuejs</li>
                  <li>WordPress</li>
                </ul>
              </td>
              <td className="column">
                <ul className="about-list">
                  <li>MapBox Gl</li>
                  <li>Arduino</li>
                  <li>Python</li>
                  <li>MQTT</li>
                  <li>Vuejs</li>
                  <li>WordPress</li>
                </ul>
              </td>
              <td className="column">
                <ul className="about-list">
                  <li>MapBox Gl</li>
                  <li>Arduino</li>
                  <li>Python</li>
                  <li>MQTT</li>
                  <li>Vuejs</li>
                  <li>WordPress</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="blogs">
          <p className="blog-title">Blog Posts</p>
          <p className="discription">Here's some blogs that I have wrote.</p>
          <ul>
            <li className="blog-list">
              <time dateTime="Thu, Jul 16 2020">Thu, Jul 16 2020</time>{" "}
              <a
                className="blog-link"
                href="https://mawuen.github.io/2020/07/16/zeroshell-a-linux-distibution-for-network-management/"
              >
                Découverte de Zeroshell OS
              </a>
            </li>
            <li className="blog-list">
              <time
                dateTime="Sat, Aug 01 2020
"
              >
                Sat, Aug 01 2020
              </time>{" "}
              <a
                className="blog-link"
                href="https://mawuen.github.io/2020/08/01/omochikaeri-le-uber-eat-opensource/"
              >
                OwnPlate le Uber Eat opensource.
              </a>
            </li>
            <li className="blog-list">
              <time dateTime="Wed, Aug 12 2020">Wed, Aug 12 2020</time>{" "}
              <a
                className="blog-link"
                href="https://mawuen.github.io/2020/08/12/git-tips-part2/"
              >
                Git Tips Part 2
              </a>
            </li>
            <li className="blog-list">
              <time dateTime="Sat, Jun 06 2020">Sat, Jun 06 2020</time>{" "}
              <a
                className="blog-link"
                href="https://mawuen.github.io/2020/06/06/sprint-conception-at-hostinger/"
              >
                Conception Sprints chez Hostinger
              </a>
            </li>
            <li className="blog-list">
              <time dateTime="Sat, Jun 06 2020">Sat, Jun 06 2020</time>{" "}
              <a
                className="blog-link"
                href="https://mawuen.github.io/2020/06/06/conception-sprints-chez-hostinger/"
              >
                Conception Sprints chez Hostinger
              </a>
            </li>
            <li className="blog-list">
              <time dateTime="Fri, Jun 12 2020">Fri, Jun 12 2020</time>{" "}
              <a
                className="blog-link"
                href="https://mawuen.github.io/2020/07/16/zeroshell-a-linux-distibution-for-network-management/"
              >
                Coup de projecteur sur l'initative ‘ED Africa Maker’
              </a>
            </li>
            <li className="blog-list">
              <time dateTime="Tue, Jun 02 2020">Tue, Jun 02 2020</time>{" "}
              <a
                className="blog-link"
                href="https://mawuen.github.io/2020/06/02/instalation-de-archlinux-sur-rapsberry-pi-3b/"
              >
                Instalation de Archlinux sur Rapsberry Pi 3B
              </a>
            </li>
            <li className="blog-list">
              <time dateTime="Tue, May 12 2020">Tue, May 12 2020</time>{" "}
              <a
                className="blog-link"
                href="https://mawuen.github.io/2020/05/12/watch-8000-iptv-channels-on-your-favorite-video-player-en/"
              >
                Watch +8000 IPTV Channels on your favorite Video Player
              </a>
            </li>
          </ul>
          <a
                className="blog-link"
                href="/blogs"
              >
                Show More blogs ...
              </a>
        </div>

        <div className="projects">
          <p className="projects-title">Projects</p>
          <p className="discription">You can find all my projects here <IconGithub  /></p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
