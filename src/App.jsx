import React   from 'react';
import Mozaik  from 'mozaik/browser';
import github  from 'mozaik-ext-github';
import jenkins from 'mozaik-ext-jenkins';


const MozaikComponent = Mozaik.Component.Mozaik;
const ConfigActions   = Mozaik.Actions.Config;


Mozaik.Registry.addExtensions({
    github,
    jenkins
});

React.render(<MozaikComponent/>, document.getElementById('mozaik'));

ConfigActions.loadConfig();
