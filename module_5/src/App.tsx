import React from "react";
import './main.global.css';
import {hot} from 'react-hot-loader/root';
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardList} from "./shared/CardList";
import {Dropdown} from "./shared/Dropdown";

function AppComponent(){
    return (
        <Layout>
            <Header />
            <Content>
                <CardList />
                <div>
                    <br/>
                    <Dropdown button={<button> test </button>}>
                        <CardList />
                    </Dropdown>
                </div>
            </Content>
        </Layout>
    );
}

export const App = hot(AppComponent);

