<?php  defined('C5_EXECUTE') or die(_("Access Denied.")); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/2000/REC-xhtml1-20000126/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head>
	
<!-- Site Header Content //-->
<link rel="stylesheet" media="screen" type="text/css" href="<?php echo $this->getStyleSheet('main.css')?>" />
<link rel="stylesheet" media="screen" type="text/css" href="<?php echo $this->getStyleSheet('typography.css')?>" />

<?php  Loader::element('header_required'); ?>

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-16808695-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head><body>
<div id="page">
	<div id="headerSpacer"></div>
	<div id="header">
		
		<?php  if ($c->isEditMode()) { ?>
		<div style="min-height: 80px">
		<?php  } ?>
		
		<div id="headerNav">
			<?php 
			$a = new Area('Header Nav');
			$a->display($c);
			?>
		</div>
		
		<h1 id="logo"><!--
			--><a href="<?php echo DIR_REL?>/"><?php 
				$block = Block::getByName('My_Site_Name');  
				if( $block && $block->bID ) $block->display();   
				else echo SITE;
			?></a><!--
		--></h1>

		<?php 
		// we use the "is edit mode" check because, in edit mode, the bottom of the area overlaps the item below it, because
		// we're using absolute positioning. So in edit mode we add a bit of space so everything looks nice.
		?>

		<div class="spacer"></div>

		<?php  if ($c->isEditMode()) { ?>
		</div>
		<?php  } ?>
		
		<div id="header-area">
			<div class="divider"></div>
			<div id="header-area-inside">
			<?php 			
			$ah = new Area('Header');
			$ah->display($c);			
			?>	
			</div>	
			
			<?php  if ($ah->getTotalBlocksInArea() > 0) { ?>
				<div class="divider"></div>
			<?php  } ?>
		</div>
	</div>			