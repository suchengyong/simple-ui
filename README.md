# simple-ui

[官方文档](https://simple-ui.netlify.app)   

## 使用方式
1. Install package [suchengyong-simple-ui]
   ```sh
   npm i -D suchengyong-simple-ui
   ```
2. Get Started
   ```vue
    <template>
        <div id="app">
            <s-button type="primary">点击报名</s-button>
        </div>
    </template>
    <script>
    import { Button } from 'suchengyong-simple-ui'
    import 'suchengyong-simple-ui/dist/simple.css'
    export default {
        name: 'app',
        components: {
            's-button':Button
        }
    }
    </script>

   ```
    

