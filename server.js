const express = require('express')
return ezapi.app( 
    [ 

        {
            type: 'use',
            url: '/admin/*',
            next: (req,res) => res.sendFile(path.join(__dirname, 'assets/index.html')),
            description: 'serve assets folder',
            category: 'ezipe'
        },
        {
            type: 'use',
            url: '/',
            next: express.static( 'assets' ),
            description: 'serve assets folder',
            category: 'ezipe'
        },

        ...ezipe.stripe,
        ...ezipe.mail
    ], 
    { 
        nocache: true,
        apiRoot: '/api',
        port: process.env.PORT || 8000
    }, 
    ezipe.auth
)

