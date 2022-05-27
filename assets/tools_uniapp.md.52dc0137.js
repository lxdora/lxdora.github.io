import{_ as n,c as s,o as a,a as t}from"./app.dbd27a4d.js";const m='{"title":"uniapp\u5F00\u53D1\u95EE\u9898\u8BB0\u5F55","description":"","frontmatter":{"title":"uniapp\u5F00\u53D1\u95EE\u9898\u8BB0\u5F55","tags":["\u524D\u7AEF"],"categories":["\u6280\u672F\u6587\u6863"],"date":"2022-02-15T15:25:43.000Z"},"headers":[],"relativePath":"tools/uniapp.md","lastUpdated":1653635450000}',p={},o=t(`<p>\u8BB0\u5F55\u4E00\u4E0B\u4F7F\u7528uni-app\u5F00\u53D1\u5C0F\u7A0B\u5E8F\u8FC7\u7A0B\u4E2D\u9047\u5230\u7684\u95EE\u9898</p><ul><li><p>\u6587\u672C\u5FC5\u987B\u653E\u5728<text></text>\u6807\u7B7E\u5185\uFF0C\u4E14\u6B64\u6807\u7B7E\u4E0D\u80FD\u6362\u884C\uFF0C\u5426\u5219\u6587\u672C\u5468\u56F4\u4F1A\u51FA\u73B0\u65E0\u6CD5\u6D88\u9664\u7684\u8FB9\u6846</p></li><li><p>\u6DFB\u52A0\u6216\u66F4\u6362\u9759\u6001\u8D44\u6E90\u540E\u9700\u8981\u91CD\u65B0\u7F16\u8BD1\uFF0C\u5426\u5219\u627E\u4E0D\u5230\u65B0\u7684\u9759\u6001\u8D44\u6E90</p></li><li><p>position:absolute\u7684\u5143\u7D20\u5FC5\u987B\u8BBE\u7F6E\u5BBD\u5EA6\uFF0C\u5426\u5219\u5B9A\u4F4D\u540E\u5143\u7D20\u4F1A\u6D88\u5931</p></li><li><p>\u4F7F\u7528scroll-view\u7EC4\u4EF6\u65F6\uFF0C\u5982\u679C\u8981\u4F7F\u7528scroll-into-view\u5C5E\u6027\u4F7F\u5176\u6EDA\u52A8\u5230\u6307\u5B9A\u5143\u7D20\uFF0C\u5219\u7ED1\u5B9A\u7684id\u8981\u5728onReady\u4E2D\u8D4B\u503C</p></li><li><p>moveable-view\u4E2D\u5D4C\u5957list\u65F6\uFF0C\u5B89\u5353\u5E73\u53F0\uFF0C\u5185\u90E8list\u6EDA\u52A8\u4F1A\u5BFC\u81F4\u5916\u9762moveable-view\u8DDF\u7740\u6EDA\u52A8\uFF0C\u904D\u5BFB\u826F\u65B9\u800C\u4E0D\u5F97\uFF0C\u6700\u540E\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\uFF1A \u5F53\u6EDA\u52A8\u5185\u90E8list\u65F6\uFF0C\u5C06moveable-view\u7684disabled\u8BBE\u7F6E\u4E3Atrue\uFF0C\u5F53\u70B9\u51FBlist\u5916\u9762\u65F6\uFF0C\u518D\u5C06disabled\u8BBE\u7F6E\u4E3Afalse\uFF0C\u8FD9\u6837\u5C31\u6709\u4E00\u4E2A\u4F53\u9A8C\u95EE\u9898\uFF0C\u5B89\u5353\u5E73\u53F0\u6EDA\u52A8\u5B8Clist\u9700\u8981\u5148\u70B9\u51FB\u4E00\u4E0B\u5916\u9762\uFF0C\u7136\u540E\u624D\u80FD\u62D6\u52A8\u3002</p></li><li><p><a href="https://ask.dcloud.net.cn/article/id-36400__page-4" target="_blank" rel="noopener noreferrer">uni-app\u5982\u4F55\u4F7F\u7528\u81EA\u5B9A\u4E49\u5B57\u4F53</a></p><blockquote><p>nvue\u548Csubnvue\u5F15\u5165\u81EA\u5B9A\u4E49\u81EA\u4F53/\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u4E0D\u80FD\u7528CSS\u65B9\u6CD5\uFF0C\u800C\u53EA\u80FD\u7528week\u6240\u89C4\u5B9A\u7684\u65B9\u6CD5\u3002\u5177\u4F53\u505A\u6CD5\u662F\uFF0C\u5728nvue\u6216subnvue\u9875\u9762\u5185\uFF0C\u5F15\u5165\u5982\u4E0Bjs\u4EE3\u7801\uFF08uni-app\u7F16\u8BD1\u6A21\u5F0F\u4E0B\uFF0C\u53EF\u653E\u7F6E\u4E8EonLoad\u51FD\u6570\u5185\uFF1Bweek\u7F16\u8BD1\u6A21\u5F0F\u4E0B\uFF0C\u53EF\u653E\u7F6E\u4E8EbeforeCreate\u51FD\u6570\u5185\u3002\u8C8C\u4F3C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u653E\u7F6E\u4E8E\u201Cexport default {...}\u201D\u4E4B\u524D\uFF09\u3002</p><div class="language-javascript line-numbers-mode"><pre><code>\u590D\u5236\u4EE3\u7801<span class="token keyword">const</span> domModule <span class="token operator">=</span> weex<span class="token punctuation">.</span><span class="token function">requireModule</span><span class="token punctuation">(</span><span class="token string">&#39;dom&#39;</span><span class="token punctuation">)</span>  
domModule<span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;fontFace&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>  
    <span class="token string-property property">&#39;fontFamily&#39;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont2&quot;</span><span class="token punctuation">,</span>  
    <span class="token string-property property">&#39;src&#39;</span><span class="token operator">:</span> <span class="token string">&quot;url(&#39;http://at.alicdn.com/t/font_1469606063_76593.ttf&#39;)&quot;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5176\u4E2D\uFF1A</p><ul><li>@fontFace \u534F\u8BAE\u540D\u79F0\uFF0C\u4E0D\u53EF\u4FEE\u6539\u3002</li><li>@fontFamily font-family\u7684\u540D\u79F0\u3002</li><li>@src \u5B57\u4F53\u5730\u5740\uFF0Curl(&#39;&#39;) \u662F\u4FDD\u7559\u5B57\u6BB5\uFF0C\u5176\u53C2\u6570\u5982\u4E0B: <ol><li>http. \u4ECEHTTP\u8BF7\u6C42\u52A0\u8F7D, e.g. url(&#39;<a href="http://at.alicdn.com/t/font_1469606063_76593.ttf" target="_blank" rel="noopener noreferrer">http://at.alicdn.com/t/font_1469606063_76593.ttf</a>&#39;)</li><li>https. \u4ECEHTTPS\u8BF7\u6C42\u52A0\u8F7D, e.g. url(&#39;<a href="https://at.alicdn.com/t/font_1469606063_76593.ttf" target="_blank" rel="noopener noreferrer">https://at.alicdn.com/t/font_1469606063_76593.ttf</a>&#39;)</li><li>local, Android ONLY. \u4ECEassets\u76EE\u5F55\u8BFB\u53D6, e.g. url(&#39;local://foo.ttf&#39;), foo.ttf \u662F\u6587\u4EF6\u540D\u5728\u4F60\u7684assets\u76EE\u5F55\u4E2D.</li><li>file. \u4ECE\u672C\u5730\u6587\u4EF6\u8BFB\u53D6, e.g. url(&#39;file://storage/emulated/0/Android/data/com.alibaba.weex/cache/http:__at.alicdn.com_t_font_1469606063_76593.ttf&#39;)</li><li>data. \u4ECEbase64\u8BFB\u53D6, e.g. url(&#39;data:font/truetype;charset=utf-8;base64,AAEAAAALAIAAAwAwR1NVQrD ....&#39;), \u4E0A\u8FF0data\u5B57\u6BB5\u4E0D\u5168\u3002</li></ol></li></ul><p><strong>\u95EE\u9898</strong></p><p>\u95EE\u9898\u7684\u96BE\u70B9\u5728\u4E8E\uFF1Asrc\u7684\u6B63\u786E\u5199\u6CD5\u3002http\u548Chttps\u5199\u6CD5\u8981\u6C42\u8054\u7F51\u52A0\u8F7D\uFF0C\u5982\u679C\u65AD\u7F51\u5C31\u65E0\u6CD5\u663E\u793A\uFF0C\u5176\u7528\u6237\u4F53\u9A8C\u80AF\u5B9A\u4E0D\u597D\u3002local\u5199\u6CD5\u53EA\u6709Android\u80FD\u591F\u91C7\u7528\uFF0CiOS\u65E0\u6CD5\u91C7\u7528\uFF0C\u517C\u5BB9\u6027\u5DEE\u3002\u90A3\u4E48\uFF0C\u5C31\u53EA\u5269\u4E0Bfile\u5199\u6CD5\u548Cdata\u5199\u6CD5\u53EF\u7528\u4E86\u3002</p><p>\u4F46\u95EE\u9898\u5728\u4E8E\uFF0Cfile\u7684\u6B63\u786E\u5199\u6CD5\u662F\u600E\u6837\u7684\uFF1F\u6211\u8BD5\u4E86N\u79CD\u529E\u6CD5\uFF0C\u90FD\u5931\u8D25\u4E86\u3002\u6700\u540E\u53EA\u80FD\u91C7\u7528data\u5199\u6CD5\uFF1A\u5148\u767E\u5EA6\u201Cttf\u8F6Cbase64\u201D\uFF0C\u628Attf\u6587\u4EF6\u4E0A\u4F20\u5230\u7F51\u4E0A\u7684\u201Cttf\u8F6Cbase64\u201D\u7F51\u9875\uFF0C\u5C06\u751F\u6210\u7684data\u5B57\u6BB5\u590D\u5236\u5230\u4E0A\u8FF0data\u5B57\u6BB5\u5373\u53EF\u3002\u4F46\u95EE\u9898\u6765\u4E86\uFF1A\uFF081\uFF09\u4E0D\u653E\u5FC3\u90A3\u4E9B\u672A\u77E5\u7F51\u7AD9\uFF0C\u62C5\u5FC3\u8F6C\u7801\u5F62\u6210\u7684base64\u6709\u4E2A\u522B\u5B57\u8282\u9519\u8BEF\uFF1B\uFF082\uFF09\u5927\u6BB5\u7684base64\u6570\u636E\u5F71\u54CD\u4EE3\u7801\u7684\u7F8E\u89C2\uFF0C\u4E14\u4F1A\u5E72\u6270HX\u7684\u53D8\u91CF\u63D0\u793A\u529F\u80FD\uFF1B\uFF083\uFF09\u4FEE\u6539ttf\u6587\u4EF6\uFF08\u5982\u589E\u5220\u6539\u56FE\u6807\uFF09\u9700\u8981\u91CD\u65B0\u8F6C\u7801\u751F\u6210\u65B0\u7684base64\u2026\u2026\u603B\u4E4B\uFF0C\u5F88\u4E0D\u65B9\u4FBF\u3002</p><p><strong>\u7406\u60F3\u7684\u5199\u6CD5\uFF0C\u8FD8\u662Ffile\u5199\u6CD5\uFF0Curl(&#39;file://storage/...&#39;);</strong></p><p><strong>\u5177\u4F53\u529E\u6CD5</strong></p><p>\uFF081\uFF09\u5C06\u81EA\u5DF1\u7684ttf\u6587\u4EF6\uFF08\u5982iconfont.ttf\uFF09\uFF0C\u653E\u7F6E\u4E8Estatic\u76EE\u5F55\u4E0B \uFF082\uFF09\u5728nvue\u6216subnve\u7684js\u4E2D\u52A0\u5165\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-javascript line-numbers-mode"><pre><code>\u590D\u5236\u4EE3\u7801<span class="token keyword">const</span> domModule <span class="token operator">=</span> weex<span class="token punctuation">.</span><span class="token function">requireModule</span><span class="token punctuation">(</span><span class="token string">&#39;dom&#39;</span><span class="token punctuation">)</span>  
domModule<span class="token punctuation">.</span><span class="token function">addRule</span><span class="token punctuation">(</span><span class="token string">&#39;fontFace&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>  
    <span class="token string-property property">&#39;fontFamily&#39;</span><span class="token operator">:</span> <span class="token string">&quot;iconfont2&quot;</span><span class="token punctuation">,</span>  
    <span class="token string-property property">&#39;src&#39;</span><span class="token operator">:</span> <span class="token string">&#39;url(&quot;&#39;</span><span class="token operator">+</span><span class="token string">&quot;file:/&quot;</span> <span class="token operator">+</span> plus<span class="token punctuation">.</span>io<span class="token punctuation">.</span><span class="token function">convertLocalFileSystemURL</span><span class="token punctuation">(</span><span class="token string">&quot;_www/static/iconfont.ttf&quot;</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&#39;&quot;)&#39;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\uFF083\uFF09\u5728\u9700\u8981\u5F15\u5165iconfont.ttf\u4E2D\u7684\u81EA\u5B9A\u4E49\u5B57\u4F53/\u56FE\u6807\u7684\u9875\u9762\u5143\u7D20\u7684css\u4E2D\u6DFB\u52A0font-family: iconfont2\u3002\u8FD9\u4E00\u6B65\u5343\u4E07\u522B\u5FD8\u4E86\u3002 \uFF084\uFF09\u5F15\u7528\u5B57\u4F53\u3002\u5728html\u4E2D\uFF0C\u91C7\u7528&quot;<strong>&amp;#n\u4F4D\u5341\u8FDB\u5236unicode\u7801</strong>&quot;\u683C\u5F0F\u5F15\u7528\u81EA\u5B9A\u4E49\u5B57\u7B26/\u5B57\u4F53\u56FE\u6807\uFF0C\u4F8B\u5982\u201C<strong>&amp;#57349</strong>\u201D\uFF1B\u5728js\u4E2D\uFF0C\u91C7\u7528\u201C<strong>\\u\u56DB\u4F4D\u5341\u516D\u8FDB\u5236unicode\u7801</strong>\u201D\u683C\u5F0F\uFF0C\u4F8B\u5982\u201C<strong>\\uE005</strong>\u201D\uFF1B\u800C\u5728css\u4E2D\uFF0C\u5219\u91C7\u7528\u201C<strong>\\\u56DB\u4F4D\u5341\u516D\u8FDB\u5236unicode</strong>\u201D\u683C\u5F0F\uFF0C\u4F8B\u5982\u201C<strong>\\E005</strong>\u201D\u3002</p><p><strong>\u6CE8\u610F</strong></p><ol><li>plus.io.convertLocalFileSystemURL()\u51FD\u6570\u53EF\u4EE5\u628A\u672C\u5730\u76F8\u5BF9\u8DEF\u5F84\u8F6C\u6362\u4E3A\u672C\u5730\u7EDD\u5BF9\u8DEF\u5F84\u3002</li><li>\u4EE3\u7801\u4E2D\u7684\u201Cfile:/\u201D\u53EA\u6709\u4E00\u6761\u659C\u6760\uFF0C\u800C\u662F\u4E0D\u4E24\u6761\u3002\u56E0\u4E3A\uFF0Cplus.io.convertLocalFileSystemURL()\u51FD\u6570\u83B7\u5F97\u7684\u672C\u5730\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u5DF2\u7ECF\u81EA\u5E26\u4E86\u4E00\u6761\u659C\u6760\u3002</li><li>fontFamily\u7684\u503C\uFF0C\u5373iconfont2\u53EF\u4EE5\u4EFB\u610F\u53D6\u3002\u4F46iconfont.ttf\u6587\u4EF6\u5185\u90E8\u7684\u5B57\u4F53\u7684\u540D\u79F0\u5FC5\u987B\u8DB3\u591F\u7279\u6B8A\u3001\u4E0D\u4E0E\u7CFB\u7EDF\u6CE8\u518C\u7684\u5176\u4ED6\u5B57\u4F53\u7684\u540D\u79F0\u51B2\u7A81\u3002</li><li>\u201Cfont-family: iconfont2;\u201D\u5FC5\u987B\u76F4\u63A5\u653E\u7F6E\u4E8E\u5177\u4F53\u5F15\u7528\u81EA\u5B9A\u4E49\u5B57\u4F53\u7684\u6807\u7B7E\u7684css\u4E2D\uFF0C\u800C\u4E0D\u80FD\u653E\u7F6E\u4E8E\u6807\u7B7E\u7684\u7236/\u7956\u6807\u7B7E\u7684css\u4E2D\uFF0C\u5426\u5219\u81EA\u5B9A\u4E49\u5B9A\u4F53\u5C06\u4E0D\u751F\u6548\u3002</li></ol></blockquote></li><li><p>uni-app\u5982\u4F55\u9000\u51FA</p><p>\u8C03\u7528<code>plus.runtime.quit()</code></p></li><li><p>uni-app\u4E0A\u4F20\u56FE\u7247\uFF0C \u89C6\u9891\uFF0C\u6587\u4EF6\u7B49</p><details class="details custom-block"><summary>uni-app\u4E0A\u4F20</summary><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">async</span> <span class="token function">afterReadImg</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">const</span> fileList <span class="token operator">=</span> event<span class="token punctuation">.</span>file<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span>item<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
				<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">uploadFileList</span><span class="token punctuation">(</span>fileList<span class="token punctuation">,</span> <span class="token string">&#39;image&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>imageList <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span> item<span class="token punctuation">.</span>data<span class="token punctuation">.</span>file_url<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token function">deleteImg</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>imageList<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token keyword">async</span> <span class="token function">afterReadVideo</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">uploadFile</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>file<span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token string">&#39;video&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>videoList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">url</span><span class="token operator">:</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>file_url<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>content_video <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token function">deleteVideo</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>videoList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>content_video <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token keyword">async</span> <span class="token function">uploadFile</span> <span class="token punctuation">(</span><span class="token parameter">filePath<span class="token punctuation">,</span> type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				uni<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
					<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u4E0A\u4F20\u4E2D&#39;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
				<span class="token keyword">const</span> globalData <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>globalData<span class="token punctuation">;</span>
				<span class="token keyword">let</span> access_token <span class="token operator">=</span> globalData<span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>userTokenKey <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
				<span class="token keyword">let</span> headerInfo <span class="token operator">=</span> globalData<span class="token punctuation">.</span>headerInfo<span class="token punctuation">;</span>
				headerInfo<span class="token punctuation">[</span><span class="token string">&#39;X-API-ACCESS-TOKEN&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> access_token<span class="token punctuation">;</span>
				<span class="token keyword">let</span> host <span class="token operator">=</span> globalData<span class="token punctuation">.</span>host<span class="token punctuation">;</span>
				<span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>host<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/api/apiroute.php?route=card/upload_attach&amp;uploadfield=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;format=json&amp;m=attach&amp;fromm=card</span><span class="token template-punctuation string">\`</span></span>
				<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> uni<span class="token punctuation">.</span><span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
					url<span class="token punctuation">,</span>
					<span class="token literal-property property">filePath</span><span class="token operator">:</span> filePath<span class="token punctuation">,</span>
					<span class="token literal-property property">header</span><span class="token operator">:</span> headerInfo<span class="token punctuation">,</span>
					<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
				uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span>res<span class="token punctuation">}</span><span class="token punctuation">)</span>
				<span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token keyword">async</span> <span class="token function">uploadFileList</span> <span class="token punctuation">(</span><span class="token parameter">fileList<span class="token punctuation">,</span> type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				uni<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
					<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u4E0A\u4F20\u4E2D&#39;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
				<span class="token keyword">const</span> globalData <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>globalData<span class="token punctuation">;</span>
				<span class="token keyword">let</span> access_token <span class="token operator">=</span> globalData<span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>userTokenKey <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
				<span class="token keyword">let</span> headerInfo <span class="token operator">=</span> globalData<span class="token punctuation">.</span>headerInfo<span class="token punctuation">;</span>
				headerInfo<span class="token punctuation">[</span><span class="token string">&#39;X-API-ACCESS-TOKEN&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> access_token<span class="token punctuation">;</span>
				<span class="token keyword">let</span> host <span class="token operator">=</span> globalData<span class="token punctuation">.</span>host<span class="token punctuation">;</span>
				<span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>host<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/api/apiroute.php?route=card/upload_attach&amp;uploadfield=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;format=json&amp;m=attach&amp;fromm=card</span><span class="token template-punctuation string">\`</span></span>
				<span class="token keyword">const</span> resList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
				<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> fileList<span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> uni<span class="token punctuation">.</span><span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
						url<span class="token punctuation">,</span>
						<span class="token literal-property property">filePath</span><span class="token operator">:</span> item<span class="token punctuation">,</span>
						<span class="token literal-property property">header</span><span class="token operator">:</span> headerInfo<span class="token punctuation">,</span>
						<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">)</span>
					resList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> resList<span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div></details></li></ul>`,2),e=[o];function c(l,u,i,r,k,b){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
