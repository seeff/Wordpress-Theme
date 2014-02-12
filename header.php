<!DOCTYPE html>
<html lang="en">
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:og="http://ogp.me/ns#"
      xmlns:fb="http://www.facebook.com/2008/fbml">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    <!-- Facebook Like Button -->
<div id="fb-root"></div>

<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=755261777834581";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>


        <div class="navbar navbar-default navbar-static-top sun-flower-background">
      <div class="container">


        <div class="navbar-header">
          <button type="button" class="navbar-toggle pull-right <?php echo ($page == "Checkout" ? "hide" : "")?>" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="<?php echo site_url(); ?>"><h1><?php bloginfo('name'); ?></h1><img src="<?php bloginfo('stylesheet_directory'); ?>/img/logo.png"></img></a>
        </div>
        <div class="navbar-collapse collapse">
                      <?php wp_nav_menu( array( 'menu' => 'Header', 'theme_location' => 'Header', 'container_class' => 'class', 'menu_class' => 'nav navbar-nav navbar-right' ) ); ?>
          <div class="nav navbar-nav navbar-right">
          </div>
        </div>
      </div>
    </div>

      </div>
    </div>