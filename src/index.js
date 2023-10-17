import './images/index.js';
import './styles/_index.scss';
import $ from 'jquery';

/* eslint prefer-arrow-callback: "off" */
$(function () {
  $('.btn_share-post-btn, .btn_close-share-btn').on('click', function () {
    const sharePostElement = $('.share-post');
    sharePostElement.toggleClass('share-post_is-hidden');
    if (sharePostElement.hasClass('share-post_is-hidden')) {
      sharePostElement.attr('aria-hidden', true);
    } else if (!sharePostElement.hasClass('share-post_is-hidden')) {
      sharePostElement.attr('aria-hidden', false);
    }
  });
});
