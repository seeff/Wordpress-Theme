<?php get_header(); ?>
<!-- Facebook like box-->
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=755261777834581";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>


<div class="container">
	<div class="row">
	  <div class="col-md-12">

		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

	<div class="row text-center">
		<h1><?php the_title(); ?></h1>
	</div>
			
		  	<?php the_content(); ?>

		<div class="row">
		  <div class="col-md-8 col-md-offset-2">
			<?php endwhile; else: ?>
				<p><?php _e('Sorry, this page does not exist.'); ?></p>
			<?php endif; ?>
			</div>
		</div>

	  </div>
	 
	</div>

	<div class="dates hidden">
		<input type="hidden" name="twelveMonthsDate" id="twelveMonthsDate" value="<?php
			echo date('Ymd', strtotime("+12 month +1 day"));
			?>" />		
		<input type="hidden" name="sixMonthsDate" id="sixMonthsDate"value="<?php
			echo date('Ymd', strtotime("+6 month +1 day"));
			?>" />		
	</div>

</div>
<?php get_footer(); ?>