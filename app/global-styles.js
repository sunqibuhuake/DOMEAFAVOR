import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    width: 100%;
    height:100%;
    background-color: #ccc;
  }


  #app {
    background-color: #ccc;
    height: 100%;
    width: 100%;
  }
  div{
   -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
      user-select:none;
  }
    a[title=站长统计] {
            display: none;
        }


`;
