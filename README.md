# simple-ui

[官方文档](https://simple-ui.netlify.app)   

## 使用方式
1. Install package [simple-ui]
   ```sh
   npm i -D simple-ui
   ```
2. Get Started
   ```vue
    <template>
        <div id="app">
            <s-button type="primary">点击报名</s-button>
        </div>
    </template>
    <script>
    import { Button } from 'simple-ui'
    import 'simple-ui/dist/simple.css'
    export default {
        name: 'app',
        components: {
            's-button':Button
        }
    }
    </script>

   ```
    

