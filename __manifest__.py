# -*- coding: utf-8 -*-
{
    'name': "OWL Timer Demo",

    'summary': """
        Demo de Timer interactivo usando Odoo Web Library (OWL)""",

    'description': """
        Módulo didáctico para enseñar OWL paso a paso:
        - Creación de componentes
        - Uso de hooks (useState, onWillUnmount)
        - Integración con el cliente web de Odoo
    """,

    'author': "Dustin Mimbela",
    'category': 'Productivity',
    'version': '0.1',

    'depends': ['base', 'web'],

    'data': [
        'views/views.xml',
    ],

    'assets': {
        'web.assets_backend': [
            'owl_timer_demo/static/src/components/**/*',
        ],
    },
    
    'installable': True,
    'application': True,
}
