'use strict'; 
{
    const $header_parys = document.getElementById('header_parts');
    $header_parys.insertAdjacentHTML('afterbegin' , `
    <header>
    <div class="header-item">
        <div class="header-img">
            <a href="./index.html">
                <img class="logo" src="../images/logo.png">
                <img class="name" src="../images/name.png">
            </a>
        </div>

        <div class="menu">
            <a class="menu-item" href="./office.html">事業情報</a>
            <a class="menu-item" href="./plice.html">料金プラン</a>
            <a class="menu-item" href="./sumple.html">制作実績</a>
            <a class="menu-info" href="https://docs.google.com/forms/d/e/1FAIpQLSfnuHsqX5wz5cMvyIq2kenyZ-0BCbp7zNgQCSP1rymwsiAwdA/viewform?usp=sf_link">お問い合わせ</a>
        </div>
    </div>
</header>
    `);
};

{
    const $footer_parts = document.getElementById('footer_parts');
    $footer_parts.insertAdjacentHTML('afterbegin' , `
    <footer>
    <div class="footer-item">
        <div class="office">
            <a class="home_link" href="./index.html"><img src="../images/name.png"></a>
            
            <p class="address">〒039-1101<br>
                青森県八戸市尻内町字家口田15-4<br>
                小笠原ハイツA<br><br>
                090-8785-9121<br>
                (10:00〜15:00 土日祝を除く)<br>
                hachinohe@deerweb-r.com

            </p>

            <div class="sns">
                <a class="instagram" href="https://www.instagram.com/web.deer/"><span class="f-fa fa-brands fa-instagram" style="color: #ffffff;"></span></a>
                <a class="line" href="https://lin.ee/OJR6c51"><span class="f-fa fa-brands fa-line" style="color: #06c755;"></span></a>
            </div>
        </div>

        <div class="map res_none">
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.18730371199734!2d141.44072068765712!3d40.50632284127756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9b4e76800628c7%3A0x5ec36488ec8f492c!2z44CSMDM5LTExMDEg6Z2S5qOu55yM5YWr5oi45biC5bC75YaF55S65a625Y-j55Sw77yR77yV4oiS77yS!5e0!3m2!1sja!2sjp!4v1680142839811!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="footer-links">
            <div class="fl-box res_none">
                <a href="../html/office.html">事業情報</a>
                <a href="../html/plice.html">料金プラン</a>
                <a href="../html/sumple.html">制作実績</a>
            </div>

            <div class="fl-box">
                <a class="res_none" href="https://docs.google.com/forms/d/e/1FAIpQLSfnuHsqX5wz5cMvyIq2kenyZ-0BCbp7zNgQCSP1rymwsiAwdA/viewform?usp=sf_link">お問い合わせ</a>
                <a href="./privacy.html">プライバシーポリシー</a>
                <a href="./transaction.html">特定商法取引法に基づく表記</a>
            </div>
        </div>
    </div>

    <div class="copy-bar">
        <p><small>Copyright &copy; 2023  DEER  All Rights Reserved.</small></p>
    </div>
</footer>
    `);
};