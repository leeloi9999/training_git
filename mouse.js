dnrftnr
yhfujkyu,
tyjyuk,
tyjkytum,
yumytumkuy"rthtyj
);
?>
</h6>
</div>
</li>
<?php
endif;
}
?>

<div class="comment-area mr-minus-30">
<!-- form  -->
<div class="comment-box mb-60" id="respond">
<?php 
comment_form( array(
    'comment_field' => '<textarea name="comment" rows="3"></textarea>',
    'fields'    => array(
        'author'    => '<div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <input type="text" name="author" placeholder="Your Name" />
                            </div>',
        'email'     =>      '<div class="col-xs-12 col-sm-6">
                                <input type="email" name="email" placeholder="Email" />
                            </div>
                        </div>',
        'url'       =>  '<input type="text" name="website" placeholder="Website" />'
    ),
    'class_form'    =>  'custom-input',
    'submit_button' =>  '<button class="btn" type="submit" name="submit">'.__('Submit comment','glw').'</button>',
    'title_reply_before'    => '<div class="comment-title mb-40">
                                    <h5 class="mb-5">',
    'title_reply'           => __('Leave a comment', 'glw'),
    'title_reply_after'     => '</h5>
                                    <div class="horizontal-line">
                                        <hr class="top" />
                                        <hr class="bottom" />
                                    </div>
                                </div>'
));
?>
</div>
<!-- end form  -->
<div class="comment-list mb-60">
<div class="comment-title mb-40">
    <h5 class="mb-5">
    <?php
    comments_number(
        __('No comments','glw'),
        __('One comment','glw'),
        __('% comments','glw')
    );
    ?>
    </h5>
    <div class="horizontal-line">
        <hr class="top" />
        <hr class="bottom" />
    </div>
</div>
<ul>
    <?php 
    wp_list_comments( array('callback' => 'glw_show_commen