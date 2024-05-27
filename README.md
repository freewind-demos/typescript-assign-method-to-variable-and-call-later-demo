TypeScript Assign Method to Variable and Call Later Demo
===========================

如果是普通函数定义的method，赋值给变量后其`this`会丢失报错。

如果是`=>`定义的method，则没问题。

但关键是如果我们很难知道要操作的那个方法是怎么定义的

```
npm install
npm start
```

Note:

`esModuleInterop` is recommended to set to `true`,
since we can have consistent importing syntax with babel,
always use:

```
import some from 'some'
```

