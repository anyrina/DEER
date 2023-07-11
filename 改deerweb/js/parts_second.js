'use strict'; 
{
    const $header_parys = document.getElementById('header_parts');
    $header_parys.insertAdjacentHTML('afterbegin' , `
    <header id="header">
        <div class="header_logo">
            <a href="../index.html"><img src="../images/header_logo.png" alt="DEER"></a>
        </div>

        <div class="header_menu">
            <a href="../works/index.html">制作実績</a>
            <a href="../index.html#top_plice">料金プラン</a>
            <a href="../company/index.html">事業情報</a>
            <a href="">お問い合わせ</a>
        </div>

                <!-- ハンバーガーメニュー部分 -->
        <div class="nav">
    
            <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
            <input id="drawer_input" class="drawer_hidden" type="checkbox">
        
            <!-- ハンバーガーアイコン -->
            <label for="drawer_input" id="drawer_open" class="drawer_open"><span></span></label>
        
            <!-- メニュー -->
            <nav id="nav_content" class="nav_content">
            <ul class="nav_list">
                <li class="nav_item"><a href="./plofiel.html">スタッフプロフィール</a></li>
                <li class="nav_item"><a href="./week.html">今週の出勤メンバー</a></li>
                <li class="nav_item"><a href="./event.html">イベント情報</a></li>
                <li class="nav_item"><a href="./access.html">予約・問い合わせ</a></li>
                </ul>
            </nav>
        </div>

    </header>

`);
};

{
    const $footer_parts = document.getElementById('footer_parts');
    $footer_parts.insertAdjacentHTML('afterbegin' , `
    <footer>
        <div class="footer_company_info">
            <div class="footer_logo">
                <a href="../index.html"><img src="../images/name.png" alt="DEER"></a>
            </div>

            <div class="footer_companyInfo">
                <p>〒039-1101<br>青森県八戸市大字尻内町字家口田15-4<br>小笠原ハイツA<br><br>平日 10:00〜14:30 (電話受付時間)<br>hachinohe@deerweb-r.com</p>
            </div>

            <div class="footer_sns">
                <a class="footer_instagram" href=""><img src="../images/instagram.png" alt="Instagram"></a>
                <a href=""><img src="../images/line.png" alt="LINE"></a>
            </div>
        </div>

        <div class="footer_links">
            <div class="footer_menuLinks footer_link">
                <a href="../index.html#header">トップ</a>
                <a href="../index.html#top_service">サービス</a>
                <a href="../index.html#top_feature">特徴</a>
                <a href="../index.html#top_works">制作実績</a>
                <a href="../index.html#top_flow">制作の流れ</a>
                <a href="../index.html#top_plice">料金プラン</a>
                <a href="../index.html#top_news">お知らせ</a>
            </div>

            <div class="footer_document footer_link">
                <a href="../company/index.html">事業情報</a>
                <a href="../privacy/index.html">プライバシーポリシー</a>
                <a href="../transaction/index.html">特定商法取引法に基づく表記</a>
            </div>

            <div class="copy">
                <p>&copy;2023　DEER</p>
            </div>
        </div>
    </footer>
`);
};