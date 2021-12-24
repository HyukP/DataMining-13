import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Tab,
  Tabs,
  Box,
  Card,
  CardContent,
  Paper,
} from "@material-ui/core";
import {PieSeries, Chart, Title} from '@devexpress/dx-react-chart-material-ui'
import GitHubIcon from "@material-ui/icons/GitHub";

const data1 = [
  { argument:'Positive', value:0.4975327602916615*100},
  { argument:'Negative', value:0.5024672397083385*100}
];
const data2 = [
  { argument:'Positive', value:0.5830925456349255*100},
  { argument:'Negative', value:0.4169074543650745*100}
];
const data3 = [
  { argument:'Positive', value:0.6116106347739696*100},
  { argument:'Negative', value:0.3883893652260304*100}
];
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isIn: false,
      value: 0,
    };
  }
  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    let device = null;
    if (this.state.value == 1) {
      device = (
        <div>
          <Box display= "flex" style={{width :"710px", height:"150px",marginTop : "100px"}}><Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Vaccinated에 대한 wordcloud 결과
              </Typography>
              <Typography variant="body2" color="text.secondary">
                다음 워드클라우드는 Postive와 Negative 수치를 기준으로 나눈 결과입니다. 측정수치가 0.7이상에 대한 것과 0.3 이하인 것에 대해 워드클라우딩을 실행한 결과입니다.
                수치가 낮을수록 부정 수치를 표현한다고 볼 수 있습니다.
              </Typography>
            </CardContent>
             </Card>
             </Box>
             <Box display="flex" marginTop="10px">
            <img src = {"https://i.ibb.co/gS9DmWj/Vaccinated-0-7.png"} style={{width: "345px", height:"260px", borderRadius:"10px"}}/>
            <img src = {"https://i.ibb.co/vQSDJ8L/Vaccinated-0-3.png"} style={{width: "345px", height:"260px",marginLeft : "20px", borderRadius:"10px"}}/>
            </Box>
            <Box display= "flex" style={{width :"710px", height:"40px",marginTop : "20px"}}>
              <Card>
                <Typography gutterBottom variant="h5" component="div" style={{fontSize :25}}>
                Positive 70% 이상
                </Typography>
              </Card>
              <Card style={{marginLeft:170}}>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize :25}}>
                Negative 30% 이하
                </Typography></Card></Box>
            <Box display= "flex" style={{width :"710px", height:"150px",marginTop : "20px"}}><Card>
            <CardContent>
              <Typography gutte CharrBottom variant="h5" component="div">
                Vaccinated에 대한 Pie Chart
              </Typography>
              <Typography variant="body2" color="text.secondary">
                다음 Chart는 모델 학습 결과를 통해 나온 수치를 변수로 설정해 그래프 형식으로 표현한 Pie Chart입니다. 소수점의 결과가 나와서 해당 변수값 * 100의 값을 설정했습니다.
                파란색이 긍정 수치이고 빨간색이 부정 수치입니다.
              </Typography>
            </CardContent>
             </Card>
             </Box>
             <Paper style={{width:"710px", height:"520px"}}><Chart data = {data1}><PieSeries valueField="value" argumentField="argument"/></Chart></Paper>
        </div>
      );
    }
    if (this.state.value == 0) {
      device = (
        <div>
          <Box display= "flex" style={{width :"710px", height:"150px",marginTop : "100px"}}><Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Omicron에 대한 wordcloud 결과
              </Typography>
              <Typography variant="body2" color="text.secondary">
                다음 워드클라우드는 Postive와 Negative 수치를 기준으로 나눈 결과입니다. 측정수치가 0.7이상에 대한 것과 0.3 이하인 것에 대해 워드클라우딩을 실행한 결과입니다.
                수치가 낮을수록 부정 수치를 표현한다고 볼 수 있습니다.
              </Typography>
            </CardContent>
             </Card>
             </Box>
             <Box display="flex" marginTop="10px">
            <img src = {"https://i.ibb.co/q78V4zQ/OmicronP.png"} style={{width: "345px", height:"260px", borderRadius:"10px"}}/>
            <img src = {"https://i.ibb.co/TwVqymC/OmicronN.png"} style={{width: "345px", height:"260px",marginLeft : "20px", borderRadius:"10px"}}/>
            </Box>
            <Box display= "flex" style={{width :"710px", height:"40px",marginTop : "20px"}}>
              <Card>
                <Typography gutterBottom variant="h5" component="div" style={{fontSize :25}}>
                Positive 70% 이상
                </Typography>
              </Card>
              <Card style={{marginLeft:170}}>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize :25}}>
                Negative 30% 이하
                </Typography></Card></Box>
            <Box display= "flex" style={{width :"710px", height:"150px",marginTop : "20px"}}><Card>
            <CardContent>
              <Typography gutte CharrBottom variant="h5" component="div">
                Omicron에 대한 Pie Chart
              </Typography>
              <Typography variant="body2" color="text.secondary">
                다음 Chart는 모델 학습 결과를 통해 나온 수치를 변수로 설정해 그래프 형식으로 표현한 Pie Chart입니다. 소수점의 결과가 나와서 해당 변수값 * 100의 값을 설정했습니다.
                파란색이 긍정 수치이고 빨간색이 부정 수치입니다.
              </Typography>
            </CardContent>
             </Card>
             </Box>
             <Paper style={{width:"710px", height:"520px"}}><Chart data = {data2}><PieSeries valueField="value" argumentField="argument"/></Chart></Paper>
        </div>
      );
    }
    if (this.state.value == 2) {
      device = (
        <div>
          <Box display= "flex" style={{width :"710px", height:"150px",marginTop : "100px"}}><Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                BitCoin에 대한 wordcloud 결과
              </Typography>
              <Typography variant="body2" color="text.secondary">
                다음 워드클라우드는 Postive와 Negative 수치를 기준으로 나눈 결과입니다. 측정수치가 0.7이상에 대한 것과 0.3 이하인 것에 대해 워드클라우딩을 실행한 결과입니다.
                수치가 낮을수록 부정 수치를 표현한다고 볼 수 있습니다.
              </Typography>
            </CardContent>
             </Card>
             </Box>
             <Box display="flex" marginTop="10px">
            <img src = {"https://i.ibb.co/X81N922/Bit-Coin-0-7.png"} style={{width: "345px", height:"260px", borderRadius:"10px"}}/>
            <img src = {"https://i.ibb.co/1b89KtD/Bit-Coin-0-3.png"} style={{width: "345px", height:"260px",marginLeft : "20px", borderRadius:"10px"}}/>
            </Box>
            <Box display= "flex" style={{width :"710px", height:"40px",marginTop : "20px"}}>
              <Card>
                <Typography gutterBottom variant="h5" component="div" style={{fontSize :25}}>
                Positive 70% 이상
                </Typography>
              </Card>
              <Card style={{marginLeft:170}}>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize :25}}>
                Negative 30% 이하
                </Typography></Card></Box>
            <Box display= "flex" style={{width :"710px", height:"150px",marginTop : "20px"}}><Card>
            <CardContent>
              <Typography gutte CharrBottom variant="h5" component="div">
                BitCoin에 대한 Pie Chart
              </Typography>
              <Typography variant="body2" color="text.secondary">
                다음 Chart는 모델 학습 결과를 통해 나온 수치를 변수로 설정해 그래프 형식으로 표현한 Pie Chart입니다. 소수점의 결과가 나와서 해당 변수값 * 100의 값을 설정했습니다.
                파란색이 긍정 수치이고 빨간색이 부정 수치입니다.
              </Typography>
            </CardContent>
             </Card>
             </Box>
             <Paper style={{width:"710px", height:"520px"}}><Chart data = {data3}><PieSeries valueField="value" argumentField="argument"/></Chart></Paper>
        </div>
      );
    }
    return (
      <div>
        <div>
          <AppBar
            position="fixed"
            style={{
              height: 60,
              background: "transparent",
              flexDirection: "row",
              boxShadow: "4px",
            }}
          >
            <div>
              <Box display="flex" style={{ height: 60 }}>
                <Tabs
                  value={this.state.value}
                  aria-label="simple tabs example"
                  onChange={this.handleChange}
                  style={{ variant: "h3", color: "inherit" }}
                >
                  <Tab label = {<span style ={{color : 'black'}}>Omicron</span>}
                    type = "file"
                    style={{ fontSize: 20 }}
                    {...this.a11yProps(0)}
                  />
                  <Tab label = {<span style ={{color : 'black'}}>Vaccinated</span>}
                    style={{ fontSize: 20 }}
                    {...this.a11yProps(2)}
                  />
                  <Tab label = {<span style ={{color : 'black'}}>BitCoin</span>}
                    style={{ fontSize: 20 }}
                    {...this.a11yProps(1)}
                  />
                  <Tab
                    target="_blank"
                    variant = "Filled"
                    href="https://github.com/HyukP/DataMining-13"
                    icon={<GitHubIcon fontSize="large" color="error"></GitHubIcon>}
                    {...this.a11yProps(3)}
                  />
                </Tabs>
                <Box flexGrow={3} />
              </Box>
            </div>
            <Typography
              align="center"
              variant="h3"
              color="inherit"
              style={{
                fontFamily: '"Helvetica Neue"',
                marginLeft: "auto",
                marginRight: 20,
                textShadow: "#c4e7d2 1px 0 10px",
                color: "black",
                fontSize: 40,
              }}
            >
              Project Results
            </Typography>
          </AppBar>
          {device}
        </div>
      </div>
    );
  }
}