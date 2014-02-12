<!DOCTYPE html>
<html lang="en">
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:og="http://ogp.me/ns#"
      xmlns:fb="http://www.facebook.com/2008/fbml">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content=
    "White socks are for wussies. Sockscribe Me will deliver awesome socks to your door monthly. Sign up for our monthly sock subscription service now!"
    name="description">
    <meta content=
    "Sockscribe Me - Awesome Socks Delivered to Your Door Monthly">
    <meta content="http://sockscribe.me/">
    <meta content="http://sockscribe.me/images/photos/two-feet-linked.png">
    <meta property="og:title" content="Sockscribe Me - Awesome Sock Subscription Service">
    <meta property="og:type" content="product">
    <meta property="og:url" content="http://sockscribe.me/">
    <meta property="og:image" content="http://sockscribe.me/images/logo.png">
    <meta property="og:site_name" content="Sockscribe Me">
    <meta property="og:fb:app_id" content="1425336154346255">
    <meta property="og:description" content="White socks are for wussies. Sockscribe Me will deliver awesome socks to your door monthly. Sign up for our monthly sock subscription service now!">
    <link href="images/ss_48x48.png" rel="icon" type="image/png">

    <title><?php wp_title('|',1,'right'); ?> <?php bloginfo('name'); ?></title>



    <!-- Le styles -->
    <link href="<?php bloginfo('stylesheet_url');?>" rel="stylesheet">
    <?php wp_enqueue_script("jquery"); ?>
    <?php wp_head(); ?>

    <!--[if gte IE 9]>
      <style type="text/css">
        .gradient {
           filter: none;
        }
      </style>
  <![endif]-->

</head>


<!-- NAVBAR
================================================== -->
  <body>

        <div class="navbar navbar-default navbar-static-top sun-flower-background">
<!--         <div class="row pomegranate-background text-center white-text sale-container">
          <div class="container">
              <a href="./sock-subscription.php" class="white-text">
                <p>Thanksgiving Sale, limited offer! Get <strong>15% off</strong> all 6 and 12 month sock subscriptions. Use code <em>THANKSGIVING</em></p>
              </a>
          </div>
        </div> -->
      <div class="container">


        <div class="navbar-header">
          <button type="button" class="navbar-toggle pull-right <?php echo ($page == "Checkout" ? "hide" : "")?>" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="<?php echo site_url(); ?>"><h1><?php bloginfo('name'); ?></h1><img src="<?php bloginfo('stylesheet_directory'); ?>/img/logo.png"></img></a>
        </div>
         <!--  <ul class="social-likes navbar-right"  data-url="http://sockscribe.me/" data-title="Sockscribe Me - Awesome Sock Subscription Service">
            <li class="facebook" title="Share link on Facebook">Facebook</li>
            <li class="twitter" data-via="sockscribeme" data-related="Awesome Sock Subscription Service" title="Share link on Twitter">Twitter</li>
            <li class="plusone" title="Share link on Google+">Google+</li>
            <li class="pinterest" title="Share image on Pinterest" data-media="http://sockscribe.me/images/logo.png">Pinterest</li>
          </ul> -->


        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">

            <?php wp_list_pages(array('title_li' => '', 'exclude' => 178)) ?>

          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>


  


              <!-- Static navbar -->

      </div>
    </div>