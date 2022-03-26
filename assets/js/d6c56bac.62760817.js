"use strict";(self.webpackChunkzen=self.webpackChunkzen||[]).push([[1545],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),f=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=f(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=f(n),p=o,_=u["".concat(s,".").concat(p)]||u[p]||d[p]||r;return n?i.createElement(_,a(a({ref:t},c),{},{components:n})):i.createElement(_,a({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var f=2;f<r;f++)a[f]=n[f];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4527:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return d}});var i=n(3117),o=n(102),r=(n(7294),n(3905)),a=["components"],l={title:"Convolution in 2D",sidebar_label:"Convolution"},s=void 0,f={unversionedId:"dl/convolution",id:"dl/convolution",title:"Convolution in 2D",description:"Code (using only numpy)",source:"@site/docs/dl/convolution.mdx",sourceDirName:"dl",slug:"/dl/convolution",permalink:"/zen/dl/convolution",editUrl:"https://github.com/vamsi3/zen/edit/master/docs/dl/convolution.mdx",tags:[],version:"current",lastUpdatedAt:1648309952,formattedLastUpdatedAt:"3/26/2022",frontMatter:{title:"Convolution in 2D",sidebar_label:"Convolution"},sidebar:"dl",previous:{title:"Binomial - Poisson distributions",permalink:"/zen/dl/binomial-poisson"}},c={},d=[{value:"Code (using only <code>numpy</code>)",id:"code-using-only-numpy",level:2}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"code-using-only-numpy"},"Code (using only ",(0,r.kt)("inlineCode",{parentName:"h2"},"numpy"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class ConvolutionLayer:\n    def __init__(self, in_channels, filter_size, numfilters, stride):\n        # Method to initialize a Convolution Layer\n        # Parameters\n        # in_channels - list of 3 elements denoting size of input for convolution layer\n        # filter_size - list of 2 elements denoting size of kernel weights for convolution layer\n        # numfilters  - number of feature maps (denoting output depth)\n        # stride      - stride to used during convolution forward pass\n        self.in_depth, self.in_row, self.in_col = in_channels\n        self.filter_row, self.filter_col = filter_size\n        self.stride = stride\n\n        self.out_depth = numfilters\n        self.out_row = int((self.in_row - self.filter_row)/self.stride + 1)\n        self.out_col = int((self.in_col - self.filter_col)/self.stride + 1)\n\n        # Stores the outgoing summation of weights * feautres \n        self.data = None\n        \n        # Initializes the Weights and Biases using a Normal Distribution with Mean 0 and Standard Deviation 0.1\n        self.weights = np.random.normal(0,0.1, (self.out_depth, self.in_depth, self.filter_row, self.filter_col))   \n        self.biases = np.random.normal(0,0.1,self.out_depth)\n        \n\n        ## This can be done in self.forwardpass() also but placing it here is more time-efficient.\n        ## k, i, j are indices of X [(depth, row, col)] accessed in row-major order of each convolution stacked in the order of row-major convolutions\n        ## (Slightly difficult to describe, but very intuitive!)\n\n        # Here i finally is a (in_depth * filter_row * filter_col) x (out_row * out_col)\n        i_filter_indices = np.tile(np.repeat(np.arange(self.filter_row), self.filter_col), self.in_depth).reshape(-1, 1).astype(int)\n        i_convolve_indices = self.stride * np.repeat(np.arange(self.out_row), self.out_col).reshape(1, -1).astype(int)\n        self.i = i_filter_indices + i_convolve_indices # Using broadcasting to our advantage\n\n        # Similarly for j. Here also we get a (in_depth * filter_row * filter_col) x (out_row * out_col)\n        j_filter_indices = np.tile(np.arange(self.filter_col), self.filter_row * self.in_depth).reshape(-1, 1).astype(int)\n        j_convolve_indices = self.stride * np.tile(np.arange(self.out_col), self.out_row).reshape(1, -1).astype(int)\n        self.j = j_filter_indices + j_convolve_indices\n\n        # For k, we save memory by using broadcasting to our advantage\n        # Here k is a (in_depth * filter_row * filter_col) x 1 matrix, which is OK since broadcasting while using k, i, j together will give proper full k matrix (alteast for intuition)\n        # This could be done here, since k has same columns if written as a full matrix like i, j on a paper.\n        self.k = np.repeat(np.arange(self.in_depth), self.filter_row * self.filter_col).reshape(-1, 1).astype(int)\n\n\n    def forwardpass(self, X):\n        # print('Forward CN ',self.weights.shape)\n        # Input\n        # X : Activations from previous layer/input\n        # Output\n        # activations : Activations after one forward pass through this layer\n        n = X.shape[0]  # batch size\n        # INPUT activation matrix       :[n X self.in_channels[0] X self.in_channels[1] X self.in_channels[2]]\n        # OUTPUT activation matrix      :[n X self.outputsize[0] X self.outputsize[1] X self.numfilters]\n\n        ## The basic idea I'm doing here is that since weights are shared, each input value interacts with multiple weights to possibly contribute to different output activations\n        ## So, we duplicate these X entries (Yes! indeed requires quite higher memory), in a very specific order so that convolution boils down to X_flattened and W_flattened interacting exactly same as a linear layer\n        ## After working on flattened space, we reshape and go back properly to our actual depth x row x col spaces.\n\n        X_flattened = X[:, self.k, self.i, self.j].transpose(1, 2, 0).reshape(self.in_depth * self.filter_row * self.filter_col, -1)\n        W_flattened = self.weights.reshape(self.out_depth, -1)\n        out_activation = sigmoid(W_flattened @ X_flattened + self.biases.reshape(-1, 1))\n\n        # We'll go back to original shapes now!\n        out_activation = out_activation.reshape(self.out_depth, self.out_row, self.out_col, n).transpose(3, 0, 1, 2)\n        self.data = (out_activation, X_flattened)\n        return out_activation\n\n    def backwardpass(self, lr, activation_prev, delta):\n        # Input\n        # lr : learning rate of the neural network\n        # activation_prev : Activations from previous layer\n        # delta : del_Error/ del_activation_curr\n        # Output\n        # new_delta : del_Error/ del_activation_prev\n        \n        # Update self.weights and self.biases for this layer by backpropagation\n        n = activation_prev.shape[0] # batch size\n\n        ## Just similar ot forward propagation, working in flattened space and going back to depth x row x col space. This time getting the new_delta is quite tricky.\n        ## We use the np.add.at() function which we use in such a way that same (k, i, j) tuples that contributed more than once, their corresponding contributing gradients gets added up.\n\n        # X_flattened = activation_prev[:, self.k, self.i, self.j].transpose(1, 2, 0).reshape(self.in_depth * self.filter_row * self.filter_col, -1)\n        out_activation, X_flattened = self.data # X_flattened can also be obtained as above, but storing it in self.data for reuse is more time efficient.\n        del_in = delta * out_activation * (1 - out_activation)\n        \n        del_in_flattened = del_in.transpose(1, 2, 3, 0).reshape(self.out_depth, -1)\n        W_flattened = self.weights.reshape(self.out_depth, -1)\n        new_delta_flattened = W_flattened.T @ del_in_flattened\n        new_delta_flattened = new_delta_flattened.reshape(self.in_depth * self.filter_row * self.filter_col, -1, n).transpose(2, 0, 1)\n\n        # We'll go back to original shapes now!\n        new_delta = np.zeros((n, self.in_depth, self.in_row, self.in_col), dtype=new_delta_flattened.dtype) # Ensure same type so that np.add.at() doesn't cause any type troubles.\n        np.add.at(new_delta, (slice(None), self.k, self.i, self.j), new_delta_flattened) # Described above\n\n        self.biases -= lr * np.sum(del_in, axis=(0, 2, 3))\n        self.weights -= lr * (del_in_flattened @ X_flattened.T).reshape(self.weights.shape)\n        return new_delta\n")))}p.isMDXComponent=!0}}]);