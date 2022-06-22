<!DOCTYPE html>
<html lang="en">

    
<head>
        <meta charset="utf-8" />
        <title>Landrick - Saas & Software Landing Page Template</title>
        <!-- favicon -->
        <link rel="shortcut icon" href="{{$resource_path}}images/favicon.ico">
        <!-- Bootstrap -->
        <link href="{{$resource_path}}css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <!-- Icons -->
        <link href="{{$resource_path}}css/materialdesignicons.min.css" rel="stylesheet" type="text/css" />
        <!-- Slider -->               
        <link rel="stylesheet" href="{{$resource_path}}css/owl.carousel.min.css"/> 
        <link rel="stylesheet" href="{{$resource_path}}css/owl.theme.default.min.css"/>    
        <!-- Main Css -->
        <link href="{{$resource_path}}css/style.css" rel="stylesheet" type="text/css" id="theme-opt" />
        <link href="{{$resource_path}}css/colors/default.css" rel="stylesheet" id="color-opt">

    </head>

    <body>
        <header id="topnav" class="defaultscroll sticky">
    <div class="container">
        <?php $logo= json_decode('[]', true); $logo['multipleData'] = json_decode('[]', true); ?><div onclick='parent.callbackEditWidget(1)'><div>
    <a class="logo" href="index.html">
        <img src="{{$resource_path}}images/cfd-direct-logo.png" height="24" alt="">
    </a>
</div></div><?php $menu= json_decode('[]', true); $menu['multipleData'] = json_decode('[]', true); ?><div onclick='parent.callbackEditWidget(2)'><div class="menu-extras">
        <div class="menu-item">
            <!-- Mobile menu toggle-->
            <a class="navbar-toggle">
                <div class="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
            <!-- End mobile menu toggle-->
        </div>
    </div>

    <div id="navigation">
        <!-- Navigation Menu-->   
        <ul class="navigation-menu">
            <li><a href="index.html">Home</a></li>
            <li class="has-submenu">
                <a href="javascript:void(0)">Landing</a><span class="menu-arrow"></span>
                <ul class="submenu megamenu">
                    <li>
                        <ul>
                            <li><a href="index-saas.html">Saas</a></li>
                            <li><a href="index-classic-saas.html">Classic Saas</a></li>
                            <li><a href="index-agency.html">Agency</a></li>
                            <li><a href="index-apps.html">Application</a></li>
                            <li><a href="index-classic-app.html">Classic Application</a></li>
                            <li><a href="index-studio.html">Studio</a></li>
                            <li><a href="index-business.html">Business</a></li>
                            <li><a href="index-modern-business.html">Modern Business</a></li>
                            <li><a href="index-hotel.html">Hotel</a></li>
                            <li><a href="index-marketing.html">Marketing</a></li>
                            <li><a href="index-enterprise.html">Enterprise</a></li>
                            <li><a href="index-insurance.html">Insurance</a></li>
                            <li><a href="index-shop.html">Shop</a></li>
                            <li><a href="index-coworking.html">Coworking</a></li>
                        </ul>
                    </li>

                    <li>
                        <ul>
                            <li><a href="index-it-solution.html">IT Solution <span class="badge badge-danger rounded">v2.5</span></a></li>
                            <li><a href="index-corporate.html">Corporate Business<span class="badge badge-danger rounded">v2.5</span></a></li>
                            <li><a href="index-task-management.html">Task Management <span class="badge badge-danger rounded">v2.5</span></a></li>
                            <li><a href="index-email-inbox.html">Email Inbox <span class="badge badge-danger rounded">v2.5</span></a></li>
                            <li><a href="index-landing-one.html">Landing One <span class="badge badge-danger rounded">v2.5</span></a></li>
                            <li><a href="index-landing-two.html">Landing Two <span class="badge badge-danger rounded">v2.5</span></a></li>
                            <li><a href="index-landing-three.html">Landing Three <span class="badge badge-danger rounded">v2.5</span></a></li>
                            <li><a href="index-travel.html">Travel <span class="badge badge-danger rounded">v2.5</span></a></li>
                            <li><a href="index-blog.html">Blog <span class="badge badge-danger rounded">v2.5</span></a></li>
                            <li><a href="forums.html">Forums <span class="badge badge-danger rounded">v2.5</span></a></li>
                            <li><a href="index-personal.html">Personal</a></li>
                            <li><a href="index-services.html">Service</a></li>
                            <li><a href="index-payments.html">Payments</a></li>
                            <li><a href="index-crypto.html">Cryptocurrency</a></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><a href="index-course.html">Course</a></li>
                            <li><a href="index-online-learning.html">Online Learning</a></li>
                            <li><a href="index-hosting.html">Hosting & Domain</a></li>
                            <li><a href="index-event.html">Event</a></li>
                            <li><a href="index-single-product.html">Product</a></li>
                            <li><a href="index-portfolio.html">Portfolio</a></li>
                            <li><a href="index-job.html">Job</a></li>
                            <li><a href="index-social-marketing.html">Social Media</a></li>
                            <li><a href="index-digital-agency.html">Digital Agency</a></li>
                            <li><a href="index-car-riding.html">Car Ride</a></li>
                            <li><a href="index-customer.html">Customer</a></li>
                            <li><a href="index-software.html">Software</a></li>
                            <li><a href="index-ebook.html">E-Book</a></li>
                            <li><a href="index-onepage.html">Saas <span class="badge badge-pill badge-warning ml-2">Onepage</span></a></li>
                        </ul>
                    </li>   
                </ul>
            </li>

            <li class="has-submenu">
                <a href="javascript:void(0)">Pages</a><span class="menu-arrow"></span>
                <ul class="submenu">
                    <li class="has-submenu"><a href="javascript:void(0)"> Company <span class="badge badge-primary rounded">Added</span></a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="page-aboutus.html"> About Us</a></li>
                            <li><a href="page-aboutus-two.html"> About Us Two <span class="badge badge-success rounded">New</span></a></li>
                            <li><a href="page-services.html">Services</a></li>
                            <li><a href="page-history.html">History <span class="badge badge-success rounded">New</span></a></li>
                            <li><a href="page-team.html"> Team</a></li>
                            <li><a href="page-pricing.html">Pricing</a></li>
                        </ul> 
                    </li>
                    <li class="has-submenu"><a href="javascript:void(0)"> Account <span class="badge badge-primary rounded">Added</span></a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="account-profile.html">Profile</a></li>
                            <li><a href="account-members.html">Members <span class="badge badge-success rounded">New</span></a></li>
                            <li><a href="account-works.html">Works <span class="badge badge-success rounded">New</span></a></li>
                            <li><a href="account-messages.html">Messages <span class="badge badge-success rounded">New</span></a></li>
                            <li><a href="account-payments.html">Payments <span class="badge badge-success rounded">New</span></a></li>
                            <li><a href="account-setting.html">Setting</a></li>
                            <li><a href="page-invoice.html">Invoice</a></li>
                        </ul>  
                    </li>
                    <li class="has-submenu"><a href="javascript:void(0)"> Shop </a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="shop-products.html">All Products</a></li>
                            <li><a href="shop-product-detail.html">Product Details</a></li>
                            <li><a href="shop-cart.html">Shop Cart</a></li>
                            <li><a href="shop-checkouts.html">Checkouts</a></li>
                            <li><a href="shop-myaccount.html">My Account</a></li>
                        </ul>  
                    </li>
                    <li class="has-submenu"><a href="javascript:void(0)"> Help center </a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="helpcenter-overview.html">Helpcenter</a></li>
                            <li><a href="helpcenter-faqs.html">Faqs</a></li>
                            <li><a href="helpcenter-guides.html">Guides</a></li>
                            <li><a href="helpcenter-support-request.html">Support Call</a></li>
                        </ul>  
                    </li>
                    <li class="has-submenu"><a href="javascript:void(0)"> Forums <span class="badge badge-danger rounded">v2.5</span></a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="forums.html">Overview <span class="badge badge-success rounded">New</span></a></li>
                            <li><a href="forums-topic.html">Forum Topic <span class="badge badge-success rounded">New</span></a></li>
                            <li><a href="forums-comments.html">Forum Comments <span class="badge badge-success rounded">New</span></a></li>
                        </ul>  
                    </li>
                    <li class="has-submenu"><a href="javascript:void(0)"> Email Template</a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="email-confirmation.html">Confirmation</a></li>
                            <li><a href="email-password-reset.html">Reset Password</a></li>
                            <li><a href="email-alert.html">Alert</a></li>
                            <li><a href="email-invoice.html">Invoice</a></li>
                        </ul>  
                    </li>
                    <li class="has-submenu"><a href="javascript:void(0)">Careers</a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="page-jobs.html">Jobs</a></li>
                            <li><a href="page-jobs-sidebar.html">Jobs - Sidebar</a></li>
                            <li><a href="page-job-detail.html">Job Detail</a></li>
                            <li><a href="page-job-apply.html">Job Apply</a></li>
                            <li><a href="page-job-company.html">Company</a></li>
                            <li><a href="page-job-candidate.html">Candidate</a></li>
                        </ul>  
                    </li>
                    <li class="has-submenu"><a href="javascript:void(0)"> Blog <span class="badge badge-primary rounded">Added</span></a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="page-blog-grid.html">Blog Grid</a></li>
                            <li><a href="page-blog-sidebar.html">Blog with Sidebar</a></li>
                            <li><a href="page-blog-list.html">Blog Listing</a></li>
                            <li><a href="page-blog-list-sidebar.html">Blog List & Sidebar</a></li>
                            <li><a href="page-blog-detail.html">Blog Detail</a></li>
                            <li><a href="page-blog-detail-two.html">Blog Detail 2 <span class="badge badge-success rounded">New</span></a></li>
                        </ul>  
                    </li>
                    <li class="has-submenu"><a href="javascript:void(0)"> Case Study <span class="badge badge-danger rounded">v2.5</span></a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="page-cases.html">All Cases <span class="badge badge-success rounded">New</span></a></li>
                            <li><a href="page-case-detail.html">Case Detail <span class="badge badge-success rounded">New</span></a></li>
                        </ul>
                    </li>
                    <li class="has-submenu"><a href="javascript:void(0)"> Works</a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="page-work-modern.html">Works Modern</a></li>
                            <li><a href="page-work-classic.html">Works Classic</a></li>
                            <li><a href="page-work-grid.html">Works Grid</a></li>
                            <li><a href="page-work-masonry.html">Works Masonry</a></li>
                            <li><a href="page-work-detail.html">Work Detail</a></li>
                        </ul>  
                    </li>
                    <li class="has-submenu"><a href="javascript:void(0)"> Auth Pages</a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="auth-login.html">Login</a></li>
                            <li><a href="auth-cover-login.html">Login Cover</a></li>
                            <li><a href="auth-login-three.html">Login Simple</a></li>
                            <li><a href="auth-signup.html">Signup</a></li>
                            <li><a href="auth-cover-signup.html">Signup Cover</a></li>
                            <li><a href="auth-signup-three.html">Signup Simple</a></li>
                            <li><a href="auth-re-password.html">Reset Password</a></li>
                            <li><a href="auth-cover-re-password.html">Reset Password Cover</a></li>
                            <li><a href="auth-re-password-three.html">Reset Password Simple</a></li>
                        </ul>  
                    </li>
                    <li class="has-submenu"><a href="javascript:void(0)"> Utility </a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="page-terms.html">Terms of Services</a></li>
                            <li><a href="page-privacy.html">Privacy Policy</a></li>
                        </ul>  
                    </li>
                    <li class="has-submenu"><a href="javascript:void(0)"> Special </a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="page-comingsoon.html">Coming Soon</a></li>
                            <li><a href="page-comingsoon2.html">Coming Soon Two</a></li>
                            <li><a href="page-maintenance.html">Maintenance</a></li>
                            <li><a href="page-error.html">Error</a></li>
                        </ul>
                    </li>
                    <li class="has-submenu"><a href="javascript:void(0)"> Contact </a><span class="submenu-arrow"></span>
                        <ul class="submenu">
                            <li><a href="page-contact-detail.html">Contact Detail</a></li>
                            <li><a href="page-contact-one.html">Contact One</a></li>
                            <li><a href="page-contact-two.html">Contact Two</a></li>
                            <li><a href="page-contact-three.html">Contact Three</a></li>
                        </ul>  
                    </li>
                </ul>
            </li>
            <li class="has-submenu">
                <a href="javascript:void(0)">Docs</a><span class="menu-arrow"></span>
                <ul class="submenu">
                    <li><a href="documentation.html">Documentation</a></li>
                    <li><a href="changelog.html">Changelog</a></li>
                    <li><a href="components.html">Components</a></li>
                    <li><a href="widget.html">Widget</a></li>
                </ul>
            </li>
        </ul><!--end navigation menu-->

        <div class="buy-menu-btn d-none">
            <a href="https://1.envato.market/4n73n" target="_blank" class="btn btn-primary">Buy Now</a>
        </div><!--end login button-->
    </div><!--end navigation--></div>
    </div>
</header><?php $hero= json_decode('{"title1":"Our Creativity Is Your"}', true); $hero['multipleData'] = json_decode('[]', true); ?><div onclick='parent.callbackEditWidget(3)'><!-- Hero Start -->
<section class="bg-half-170  d-table w-100" id="home">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7 col-md-7">
                <div class="title-heading mt-4">
                    <h1 class="heading mb-3"> {{$hero['title1']}}<span class="text-primary">Success</span> </h1>
                    <p class="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                    <div class="mt-4">
                        <a href="page-contact-one.html" class="btn btn-primary mt-2 mr-2"><i class="mdi mdi-email"></i> Get Started</a>
                        <a href="documentation.html" class="btn btn-outline-primary mt-2"><i class="mdi mdi-book-outline"></i> Documentation</a>
                    </div>
                </div>
            </div><!--end col-->

            <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <img src="{{$resource_path}}images/illustrator/Startup_SVG.svg" alt="">
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</section><!--end section-->
<!-- Hero End --></div><?php $partners= json_decode('[]', true); $partners['multipleData'] = json_decode('[]', true); ?><div onclick='parent.callbackEditWidget(4)'><!-- Partners start -->
<section class="py-4 border-bottom border-top">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-2 col-md-2 col-6 text-center py-4">
                <img src="{{$resource_path}}images/client/amazon.svg" class="avatar avatar-ex-sm" alt="">
            </div><!--end col-->

            <div class="col-lg-2 col-md-2 col-6 text-center py-4">
                <img src="{{$resource_path}}images/client/google.svg" class="avatar avatar-ex-sm" alt="">
            </div><!--end col-->
            
            <div class="col-lg-2 col-md-2 col-6 text-center py-4">
                <img src="{{$resource_path}}images/client/lenovo.svg" class="avatar avatar-ex-sm" alt="">
            </div><!--end col-->
            
            <div class="col-lg-2 col-md-2 col-6 text-center py-4">
                <img src="{{$resource_path}}images/client/paypal.svg" class="avatar avatar-ex-sm" alt="">
            </div><!--end col-->
            
            <div class="col-lg-2 col-md-2 col-6 text-center py-4">
                <img src="{{$resource_path}}images/client/shopify.svg" class="avatar avatar-ex-sm" alt="">
            </div><!--end col-->
            
            <div class="col-lg-2 col-md-2 col-6 text-center py-4">
                <img src="{{$resource_path}}images/client/spotify.svg" class="avatar avatar-ex-sm" alt="">
            </div><!--end col-->
        </div><!--end row-->
    </div><!--end container-->
</section><!--end section-->
<!-- Partners End --></div><script>var anchors = document.getElementsByTagName("a");for (var i = 0; i < anchors.length; i++) {anchors[i].href = "#";}</script>
    <!-- Start Style switcher -->
    <div id="style-switcher" style="left: 0px;" class="bg-light border p-3 pt-2 pb-2"  resource_path="{{$resource_path}}">
        <h3 class="title text-center">Select Your Color</h3>
        <ul class="pattern text-center mb-2">
            <li class="list-inline-item">
                <a class="default" href="#"></a>
            </li>
            <li class="list-inline-item">
                <a class="green" href="#"></a>
            </li>
            <li class="list-inline-item">
                <a class="purple" href="#"></a>
            </li>
            <li class="list-inline-item">
                <a class="red" href="#"></a>
            </li>
            <li class="list-inline-item">
                <a class="skyblue" href="#"></a>
            </li>
            <li class="list-inline-item">
                <a class="skobleoff" href="#"></a>
            </li>
            <li class="list-inline-item">
                <a class="cyan" href="#"></a>
            </li>
            <li class="list-inline-item">
                <a class="slateblue" href="#"></a>
            </li>
        </ul>

        <h3 class="title text-center pt-3 mb-0 border-top">Theme Option</h3>
        <div class="text-center">
            <a href="#" class="btn btn-sm w-100 btn-primary rtl-version t-rtl-light mt-2">RTL</a>
            <a href="#" class="btn btn-sm w-100 btn-primary ltr-version t-ltr-light mt-2">LTR</a>
            <a href="#" class="btn btn-sm w-100 btn-primary dark-rtl-version t-rtl-dark mt-2">RTL</a>
            <a href="#" class="btn btn-sm w-100 btn-primary dark-ltr-version t-ltr-dark mt-2">LTR</a>
            <a href="#" class="btn btn-sm w-100 btn-dark dark-version t-dark mt-2">Dark</a>
            <a href="#" class="btn btn-sm w-100 btn-dark light-version t-light mt-2">Light</a>
        </div>
        <div class="bottom">
            <a href="#" class="settings bg-white shadow d-block"><i class="mdi mdi-cog ml-1 mdi-24px position-absolute mdi-spin text-primary"></i></a>
        </div>
    </div>
    <!-- End Style switcher -->

    <!-- Back to top -->
    <a href="#" class="btn btn-icon btn-soft-primary back-to-top"><i data-feather="arrow-up" class="icons"></i></a>
    <!-- Back to top -->

    <!-- javascript -->
    <script src="{{$resource_path}}js/jquery-3.5.1.min.js"></script>
    <script src="{{$resource_path}}js/bootstrap.bundle.min.js"></script>
    <script src="{{$resource_path}}js/jquery.easing.min.js"></script>
    <script src="{{$resource_path}}js/scrollspy.min.js"></script>
    <!-- SLIDER -->
    <script src="{{$resource_path}}js/owl.carousel.min.js"></script>
    <script src="{{$resource_path}}js/owl.init.js"></script>
    <!-- Icons -->
    <script src="{{$resource_path}}js/feather.min.js"></script>
    <!-- Switcher -->
    <script src="{{$resource_path}}js/switcher.js"></script>
    <!-- Main Js -->
    <script src="{{$resource_path}}js/app.js"></script>
</body>

</html>