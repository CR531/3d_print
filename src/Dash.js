import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import RequestForm from "./RequestForm";
import Orders from "./Orders";
import Home from "./Home";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    main_heading: {
        fontSize: "x-large",
        fontWeight: "500",
        fontVariant: "all-petite-caps",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        position: "sticky",
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: "5%",
        background: "rgba(255, 194, 23, 0.95)",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    menu_list: {
        background: "#3b3b3b",
        textAlign: "center",
    },
    menu_text: {
        color: "white",
        fontSize: "larger",
        fontWeight: "700",
    },
    card_css: {
        marginTop: "5%",
        marginLeft: "3%",
        marginRight: "3%",
        width: "77%",
    },
    div_css: {
        height: "100vh"
    },
    link_css: {
        color: "black"
    },
    toolbar: theme.mixins.toolbar,
});

class Dash extends Component {
    constructor() {
        super();
        this.state = {
            home_selected: true,
            req_form_selected: false,
            orders_selected: false
        }
    }
    handleHome = () => {
        this.setState({ ...this.state, home_selected: true, req_form_selected: false, orders_selected: false });
    };
    handleRequestForm = () => {
        this.setState({ ...this.state, home_selected: false, req_form_selected: true, orders_selected: false });
    };
    handleOrders = () => {
        this.setState({ ...this.state, home_selected: false, req_form_selected: false, orders_selected: true });
    };
    render() {
        const { classes } = this.props;
        return (
            <Router>
                <div className={classes.root}>
                    <CssBaseline />
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.toolbar} />

                        <List className={classes.main_heading}>
                            <ListItem className={classes.menu_list}>
                                <ListItemText className={classes.menu_text} primary="Menu" />
                            </ListItem>
                            <Divider />
                            <Link to="/" className="link_css">
                                <ListItem
                                    button
                                    onClick={() => this.handleHome()}
                                    selected={this.state.home_selected}
                                >
                                    <ListItemIcon>
                                        {/* <HomeIcon /> */}
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItem>
                            </Link>
                            <Divider />
                            <Link to="/request_form" className="link_css">
                                <ListItem
                                    button
                                    onClick={() => this.handleRequestForm()}
                                    selected={this.state.req_form_selected}
                                >
                                    <ListItemIcon>
                                        {/* <i class="material-icons md-18">face</i> */}
                                    </ListItemIcon>
                                    <ListItemText primary="Request Form" />
                                </ListItem>
                            </Link>
                            <Divider />
                            <Link to="/orders" className="link_css">
                                <ListItem button
                                    onClick={() => this.handleOrders()}
                                    selected={this.state.orders_selected}>
                                    <ListItemIcon>
                                        <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Orders" />
                                </ListItem>
                            </Link>
                        </List>
                        <Divider />
                    </Drawer>
                    <Card className={classes.card_css}>
                        <Route exact path='/' component={Home} />
                        <Route path='/request_form' component={RequestForm} />
                        <Route path='/orders' component={Orders} />
                    </Card>
                </div >
            </Router>
        );
    }
}
export default withStyles(styles)(Dash)