import RenderDom from 'react-dom/client';
import Todo from './todo';


const root = document.getElementById("root");


const rootDOm = RenderDom.createRoot(root);

rootDOm.render(<div>
    <Todo />
</div>)