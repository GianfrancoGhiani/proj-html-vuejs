import { reactive } from "vue";

export const store = reactive({
    userEmail:'',
    error:false,
    topMenu:['home', 'apple', 'microsoft', 'android', 'forums', 'contanct us'],
    footLinks:[
    ['popular topics', 'Lorem ipsum dolor sit, amet consectetur adipisicing.', 'Lorem ipsum dolor sit, amet consectetur adipisicing.', 'Lorem ipsum dolor sit, amet consectetur adipisicing.', 'Lorem ipsum dolor sit, amet consectetur adipisicing.'],
    ['recent topics', 'Lorem ipsum dolor sit, amet consectetur adipisicing.','Lorem ipsum dolor sit, amet consectetur adipisicing.','Lorem ipsum dolor sit, amet consectetur adipisicing.','Lorem ipsum dolor sit, amet consectetur adipisicing.'],
    ['latest replies','Lorem ipsum dolor sit, amet consectetur adipisicing.', 'Lorem ipsum dolor sit, amet consectetur adipisicing.', 'Lorem ipsum dolor sit, amet consectetur adipisicing.', 'Lorem ipsum dolor sit, amet consectetur adipisicing.']
    ],
    forumIcons:[
        {icon: '<i class="fa-solid fa-file-lines"></i>',
        title:'news &amp; comunity',},
        {icon: '<i class="fa-brands fa-apple"></i>',
        title:'apple forum',},
        {icon: '<i class="fa-brands fa-windows"></i>',
        title:'microsoft forum',},
        {icon: '<i class="fa-brands fa-android"></i>',
        title:'android forum',},
        {icon: '<i class="fa-solid fa-mug-saucer"></i>',
        title:'general discussion',},
        {icon: '<i class="fa-solid fa-cubes"></i>',
        title:'apps &amp; software',},
        {icon: '<i class="fa-solid fa-laptop"></i>',
        title:'gadgets &amp; stuff',},
        {icon: '<i class="fa-solid fa-wrench"></i>',
        title:'tutorials &amp; guides',},
    ],
    products:{
        news1: {
            mobilePhone:{
            url: '/img/post_feat_img_25-700x441.jpg',
            name:'Morbi vitae dui euismod vulputate sollicitudin',
            date: 'October 11th, 2015',
            comments_counter: 2,
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus ab ad quae veniam exercitationem ipsam suscipit, minima nihil eos aliquid ipsa ut.'
        },
        mobilePhoto: {
            url: '/img/post_feat_img_24-700x441.jpg',
            name:'Vivamus pellenteque, felis quis varius',
            date: 'October 11th, 2015',
            comments_counter: 'Off',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus ab ad quae veniam exercitationem ipsam suscipit, minima nihil eos aliquid ipsa ut.'
        },
        smartWatch:{
            url: '/img/post_feat_img_23-700x441.jpg',
            name:'Donec ornare pretium eget scelisque justo',
            date: 'October 11th, 2015',
            comments_counter: 'Off',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus ab ad quae veniam exercitationem ipsam suscipit, minima nihil eos aliquid ipsa ut.'
        }},
        news2:{
            tablet:{
                url: '/img/post_feat_img_22-700x441.jpg',
                name:'Fusce sollicitudin nunc sed placerat varius',
                date: 'October 11th, 2015',
                comments_counter: 'Off',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus ab ad quae veniam exercitationem ipsam suscipit, minima nihil eos aliquid ipsa ut.'
            },
            photo:{
                url: '/img/post_feat_img_21-700x441.jpg',
                name:'Donec facilis sodales leo sit amet laoreet',
                date: 'October 11th, 2015',
                comments_counter: 'Off',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus ab ad quae veniam exercitationem ipsam suscipit, minima nihil eos aliquid ipsa ut.'
            },
            thinMonitor:{
                url: '/img/post_feat_img_20-700x441.jpg',
                name:'Proin eu purus sed aru aliquet curabir vens',
                date: 'October 11th, 2015',
                comments_counter: 'Off',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus ab ad quae veniam exercitationem ipsam suscipit, minima nihil eos aliquid ipsa ut.'
            }
        }

    },
    tutorial:{
        smartWatch: {
            url: '/img/post_feat_img_23-700x441.jpg',
            name:'Donec ornare pretium eget scelisque justo',
            date: 'October 11th, 2015',
            comments_counter: 'Off',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus ab ad quae veniam exercitationem ipsam suscipit, minima nihil eos aliquid ipsa ut.'
        },
        tablet:{
            url: '/img/post_feat_img_22-700x441.jpg',
            name:'Fusce sollicitudin nunc sed placerat varius',
            date: 'October 11th, 2015',
            comments_counter: 'Off',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus ab ad quae veniam exercitationem ipsam suscipit, minima nihil eos aliquid ipsa ut.'
        },
        thinMonitor:{
            url: '/img/post_feat_img_20-700x441.jpg',
            name:'Proin eu purus sed aru aliquet curabir vens',
            date: 'October 11th, 2015',
            comments_counter: 'Off',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero temporibus ab ad quae veniam exercitationem ipsam suscipit, minima nihil eos aliquid ipsa ut.'
        }
    },
    social:[
       {
         icon:'<i class="fa-brands fa-facebook-f"></i>',
         class: 'vio',
        },
       {
         icon:'<i class="fa-brands fa-twitter"></i>',
         class: 'lightb',
        },
        {
            icon:'<i class="fa-brands fa-instagram"></i>',
            class: 'blue',
        },
        {
            icon:'<i class="fa-brands fa-youtube"></i>',
            class: 'yt',
        },
    ]


})