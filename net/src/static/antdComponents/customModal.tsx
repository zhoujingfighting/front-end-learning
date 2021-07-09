import React from 'react'
import {Tabs,List,Typography} from 'antd'
const { TabPane } = Tabs;
/**
 * @param definition of props should be payed attension
 * @returns react component
 */
export const TestComponent = ({props}:any) => {
    const arr = Object.keys(props)
    console.log(arr)
        return (
            <React.Fragment>
               <>
                    <Tabs defaultActiveKey="1" onChange={() => console.log(1)} centered={true} size='large'>
                        <TabPane tab="Recent WorkSpaces" key="1">
                            {
                                <List
                                    bordered
                                    dataSource={arr}
                                    renderItem={item => (
                                        <List.Item>
                                            <Typography.Text mark>[Project URI]</Typography.Text> {item}
                                        </List.Item>
                                    )}
                                />
                            }
                        </TabPane>
                        <TabPane tab="New WorkSpaces" key="2">
                            {
                                <List
                                    bordered
                                    dataSource={arr}
                                    renderItem={item => (
                                        <List.Item>
                                            <Typography.Text mark>[Project URI]</Typography.Text> {item}
                                        </List.Item>
                                    )}
                                />
                            }
                        </TabPane>
                    </Tabs>
               </>
            </React.Fragment>
           
        )
}
