<?php get_header(); ?>

<section class="content-wrapper">

	<?php while(have_posts()) : the_post(); ?>

		<h1 class="entry-title"><?php the_title(); ?></h1>

		<section>
			
			<?php the_content(); ?>
		</section>

	<?php endwhile; ?>

</section><!--/content-wrapper-->

<?php get_footer(); ?>
