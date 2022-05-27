import{_ as s,c as a,o as n,a as e}from"./app.dbd27a4d.js";const m='{"title":"RESTful\u98CE\u683C","description":"","frontmatter":{"title":"RESTful\u98CE\u683C","tags":["\u524D\u7AEF"],"categories":["\u6280\u672F\u6587\u6863"],"date":"2021-07-19T10:17:38.000Z"},"headers":[],"relativePath":"tools/RESTful\u98CE\u683C.md","lastUpdated":1653635450000}',t={},p=e(`<p>RESTful\u662F\u4E00\u79CD\u63A5\u53E3\u7684\u8BBE\u8BA1\u98CE\u683C\uFF0C\u4F9D\u636E\u8FD9\u79CD\u98CE\u683C\u5B8C\u6210\u7684\u63A5\u53E3\u4FBF\u4E8E\u7BA1\u7406\u4E14\u5177\u6709\u826F\u597D\u7684\u53EF\u8BFB\u6027</p><p><a href="https://github.com/aisuhua/restful-api-design-references" target="_blank" rel="noopener noreferrer">\u53C2\u8003\u6587\u6863</a></p><h1 id="\u4E3A\u4EC0\u4E48\u9700\u8981restful" tabindex="-1">\u4E3A\u4EC0\u4E48\u9700\u8981RESTful <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981restful" aria-hidden="true">#</a></h1><p>\u524D\u7AEF\u8BBE\u5907\u5C42\u51FA\u4E0D\u7A77\uFF08\u624B\u673A\u3001\u5E73\u677F\u3001\u684C\u9762\u7535\u8111\u3001\u5176\u4ED6\u4E13\u7528\u8BBE\u5907......),\u5FC5\u987B\u6709\u4E00\u79CD\u7EDF\u4E00\u7684\u673A\u5236\uFF0C\u65B9\u4FBF\u4E0D\u540C\u7684\u524D\u7AEF\u8BBE\u5907\u4E0E\u540E\u7AEF\u8FDB\u884C\u901A\u4FE1\u3002RESTful\u67B6\u6784\u56E0\u5176\u7ED3\u6784\u6E05\u6670\uFF0C\u7B26\u5408\u6807\u51C6\uFF0C\u6613\u4E8E\u7406\u89E3\uFF0C\u6269\u5C55\u65B9\u4FBF\uFF0C\u6210\u4E3A\u5F53\u524D\u6700\u6D41\u884C\u7684\u4E00\u79CD\u4E92\u8054\u7F51\u8F6F\u4EF6\u67B6\u6784</p><h1 id="\u4EC0\u4E48\u662Frestful" tabindex="-1">\u4EC0\u4E48\u662FRESTful <a class="header-anchor" href="#\u4EC0\u4E48\u662Frestful" aria-hidden="true">#</a></h1><p>REST\u662F\u82F1\u6587\u7684\u7F29\u5199\uFF0C\u5168\u79F0\u4E3A Resource REpresentational State Transfer, \u7F29\u5199\u7684\u65F6\u5019\u7701\u6389\u4E86\u7B2C\u4E00\u4E2A\u4E3B\u8BED\uFF0C \u4E2D\u6587\u7FFB\u8BD1\u4E3A\u8D44\u6E90\u8868\u73B0\u5C42\u72B6\u6001\u8F6C\u79FB\u3002</p><ul><li>Resource\uFF1A \u8D44\u6E90\uFF0C \u5373\u6570\u636E (uri)</li><li>REpresentational\uFF1A \u67D0\u79CD\u8868\u73B0\u5F62\u5F0F\uFF0C \u5982JSON\uFF0C XML\u7B49</li><li>State Transfer: \u72B6\u6001\u53D8\u5316\uFF0C \u901A\u8FC7HTTP\u52A8\u8BCD\u5B9E\u73B0</li></ul><p>\u5982\u679C\u4E00\u4E2A\u67B6\u6784(api)\u7B26\u5408REST\u98CE\u683C\uFF0C \u5C31\u79F0\u5B83\u4E3ARESTful\u67B6\u6784(api)</p><p>RESTful\u67B6\u6784\uFF0C\u662F\u9762\u5411\u8D44\u6E90\u7684\u67B6\u6784\uFF1A</p><ul><li>\u6BCF\u4E00\u4E2Auri\u4EE3\u8868\u4E00\u79CD\u8D44\u6E90</li><li>\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\uFF0C \u4F20\u9012\u8FD9\u79CD\u8D44\u6E90\u7684\u67D0\u79CD\u8868\u73B0\u5C42</li><li>\u5BA2\u6237\u7AEF\u901A\u8FC7HTTP\u52A8\u8BCD\uFF0C\u5BF9\u670D\u52A1\u7AEF\u8D44\u6E90\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5B9E\u73B0\u8868\u73B0\u5C42\u72B6\u6001\u53D8\u5316</li></ul><p>\u4EC0\u4E48\u6837\u7684api\u662F\u4E00\u4E2A\u597D\u7684\u7B26\u5408RESTful\u7684api\uFF1F</p><p>\u770Buri\u5C31\u77E5\u9053\u8981\u4EC0\u4E48 \u770Bhttp method\u5C31\u77E5\u9053\u5E72\u4EC0\u4E48 \u770Bhttp status code\u5C31\u77E5\u9053\u7ED3\u679C\u5982\u4F55</p><h1 id="\u5B9E\u8DF5" tabindex="-1">\u5B9E\u8DF5 <a class="header-anchor" href="#\u5B9E\u8DF5" aria-hidden="true">#</a></h1><ol><li><p>\u57FA\u7840, \u5BF9\u7528\u6237\u8D44\u6E90\u8FDB\u884C\u64CD\u4F5C</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u975ERESTful\u98CE\u683C</span>
<span class="token constant">POST</span>  <span class="token operator">/</span>api<span class="token operator">/</span>add_user
<span class="token constant">POST</span>  <span class="token operator">/</span>api<span class="token operator">/</span>delete_user
<span class="token constant">POST</span>  <span class="token operator">/</span>api<span class="token operator">/</span>update_user 
<span class="token constant">GET</span>  <span class="token operator">/</span>api<span class="token operator">/</span>get_user
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-js line-numbers-mode"><pre><code><span class="token constant">GET</span> <span class="token operator">/</span>api<span class="token operator">/</span>users    <span class="token comment">//\u83B7\u53D6\u7528\u6237\u5217\u8868</span>
<span class="token constant">GET</span> <span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span>   <span class="token comment">//\u83B7\u53D6\u7528\u6237ID\u4E3A1\u7684\u7528\u6237\u4FE1\u606F    /api/users?id=1</span>
<span class="token constant">POST</span> <span class="token operator">/</span>api<span class="token operator">/</span>users    <span class="token comment">// \u65B0\u589E\u4E00\u4E2A\u7528\u6237</span>
<span class="token constant">PUT</span>  <span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span>   <span class="token comment">//\u4FEE\u6539id\u4E3A1\u7684\u7528\u6237\u4FE1\u606F</span>
<span class="token constant">PATCH</span> <span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span>   <span class="token comment">//\u66F4\u65B0id\u4E3A1\u7684\u7528\u6237\u7684\u67D0\u4E9B\u5B57\u6BB5</span>
<span class="token constant">DELETE</span> <span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span>   <span class="token comment">//\u5220\u9664id\u4E3A1\u7684\u7528\u6237</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>\u8D44\u6E90\u540D\u79F0\u5E94\u4F7F\u7528\u590D\u6570(\u5982users\u800C\u4E0D\u662Fuser)</p></li><li><p>\u65B0\u589E\u8D44\u6E90\u4F7F\u7528post\uFF0C \u66F4\u65B0\u4E00\u4E2A\u8D44\u6E90\u4F7F\u7528put</p><p><a href="https://www.cnblogs.com/one-villager/articles/9231239.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/one-villager/articles/9231239.html</a></p><p>\u5B89\u5168\u6027\u548C\u5E42\u7B49\u6027</p><blockquote><ol><li><strong>\u5B89\u5168\u6027</strong>\uFF1A\u4E0D\u4F1A\u6539\u53D8\u8D44\u6E90\u72B6\u6001\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u53EA\u8BFB\u7684\uFF1B</li><li><strong>\u5E42\u7B49\u6027</strong>\uFF1A\u6267\u884C1\u6B21\u548C\u6267\u884CN\u6B21\uFF0C\u5BF9\u8D44\u6E90\u72B6\u6001\u6539\u53D8\u7684\u6548\u679C\u662F\u7B49\u4EF7\u7684(\u5BF9\u8D44\u6E90\u672C\u8EAB\u6CA1\u5DEE\u522B)\u3002</li></ol><table><thead><tr><th style="text-align:left;">.</th><th style="text-align:left;">\u5B89\u5168\u6027</th><th style="text-align:left;">\u5E42\u7B49\u6027</th></tr></thead><tbody><tr><td style="text-align:left;">GET</td><td style="text-align:left;">\u221A</td><td style="text-align:left;">\u221A</td></tr><tr><td style="text-align:left;">POST</td><td style="text-align:left;">\xD7</td><td style="text-align:left;">\xD7</td></tr><tr><td style="text-align:left;">PUT</td><td style="text-align:left;">\xD7</td><td style="text-align:left;">\u221A</td></tr><tr><td style="text-align:left;">DELETE</td><td style="text-align:left;">\xD7</td><td style="text-align:left;">\u221A</td></tr></tbody></table><p>POST\u6240\u5BF9\u5E94\u7684URI\u5E76\u975E\u521B\u5EFA\u7684\u8D44\u6E90\u672C\u8EAB\uFF0C\u800C\u662F\u8D44\u6E90\u7684\u63A5\u6536\u8005\u3002\u6BD4\u5982\uFF1APOST <a href="http://www.forum.com/articles%E7%9A%84%E8%AF%AD%E4%B9%89%E6%98%AF%E5%9C%A8http://www.forum.com/articles%E4%B8%8B%E5%88%9B%E5%BB%BA%E4%B8%80%E7%AF%87%E5%B8%96%E5%AD%90%EF%BC%8CHTTP%E5%93%8D%E5%BA%94%E4%B8%AD%E5%BA%94%E5%8C%85%E5%90%AB%E5%B8%96%E5%AD%90%E7%9A%84%E5%88%9B%E5%BB%BA%E7%8A%B6%E6%80%81%E4%BB%A5%E5%8F%8A%E5%B8%96%E5%AD%90%E7%9A%84URI%E3%80%82%E4%B8%A4%E6%AC%A1%E7%9B%B8%E5%90%8C%E7%9A%84POST%E8%AF%B7%E6%B1%82%E4%BC%9A%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E5%88%9B%E5%BB%BA%E4%B8%A4%E4%BB%BD%E8%B5%84%E6%BA%90%EF%BC%8C%E5%AE%83%E4%BB%AC%E5%85%B7%E6%9C%89%E4%B8%8D%E5%90%8C%E7%9A%84URI%EF%BC%9B%E6%89%80%E4%BB%A5%EF%BC%8CPOST%E6%96%B9%E6%B3%95%E4%B8%8D%E5%85%B7%E5%A4%87%E5%B9%82%E7%AD%89%E6%80%A7%E3%80%82%E8%80%8CPUT%E6%89%80%E5%AF%B9%E5%BA%94%E7%9A%84URI%E6%98%AF%E8%A6%81%E5%88%9B%E5%BB%BA%E6%88%96%E6%9B%B4%E6%96%B0%E7%9A%84%E8%B5%84%E6%BA%90%E6%9C%AC%E8%BA%AB%E3%80%82%E6%AF%94%E5%A6%82%EF%BC%9APUT" target="_blank" rel="noopener noreferrer">http://www.forum.com/articles\u7684\u8BED\u4E49\u662F\u5728http://www.forum.com/articles\u4E0B\u521B\u5EFA\u4E00\u7BC7\u5E16\u5B50\uFF0CHTTP\u54CD\u5E94\u4E2D\u5E94\u5305\u542B\u5E16\u5B50\u7684\u521B\u5EFA\u72B6\u6001\u4EE5\u53CA\u5E16\u5B50\u7684URI\u3002\u4E24\u6B21\u76F8\u540C\u7684POST\u8BF7\u6C42\u4F1A\u5728\u670D\u52A1\u5668\u7AEF\u521B\u5EFA\u4E24\u4EFD\u8D44\u6E90\uFF0C\u5B83\u4EEC\u5177\u6709\u4E0D\u540C\u7684URI\uFF1B\u6240\u4EE5\uFF0CPOST\u65B9\u6CD5\u4E0D\u5177\u5907\u5E42\u7B49\u6027\u3002\u800CPUT\u6240\u5BF9\u5E94\u7684URI\u662F\u8981\u521B\u5EFA\u6216\u66F4\u65B0\u7684\u8D44\u6E90\u672C\u8EAB\u3002\u6BD4\u5982\uFF1APUT</a> <a href="http://www.forum/articles/4231%E7%9A%84%E8%AF%AD%E4%B9%89%E6%98%AF%E5%88%9B%E5%BB%BA%E6%88%96%E6%9B%B4%E6%96%B0ID%E4%B8%BA4231%E7%9A%84%E5%B8%96%E5%AD%90%E3%80%82%E5%AF%B9%E5%90%8C%E4%B8%80URI%E8%BF%9B%E8%A1%8C%E5%A4%9A%E6%AC%A1PUT%E7%9A%84%E5%89%AF%E4%BD%9C%E7%94%A8%E5%92%8C%E4%B8%80%E6%AC%A1PUT%E6%98%AF%E7%9B%B8%E5%90%8C%E7%9A%84%EF%BC%9B%E5%9B%A0%E6%AD%A4%EF%BC%8CPUT%E6%96%B9%E6%B3%95%E5%85%B7%E6%9C%89%E5%B9%82%E7%AD%89%E6%80%A7%E3%80%82" target="_blank" rel="noopener noreferrer">http://www.forum/articles/4231\u7684\u8BED\u4E49\u662F\u521B\u5EFA\u6216\u66F4\u65B0ID\u4E3A4231\u7684\u5E16\u5B50\u3002\u5BF9\u540C\u4E00URI\u8FDB\u884C\u591A\u6B21PUT\u7684\u526F\u4F5C\u7528\u548C\u4E00\u6B21PUT\u662F\u76F8\u540C\u7684\uFF1B\u56E0\u6B64\uFF0CPUT\u65B9\u6CD5\u5177\u6709\u5E42\u7B49\u6027\u3002</a></p></blockquote></li><li><p>\u5982\u679C\u4E00\u4E2A\u8D44\u6E90\u4F9D\u8D56\u4E8E\u53E6\u4E00\u4E2A\u8D44\u6E90</p><div class="language-js line-numbers-mode"><pre><code><span class="token constant">GET</span> <span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span>hobbies    <span class="token comment">//\u83B7\u53D6id\u4E3A1\u7684\u7528\u6237\u7684\u7231\u597D</span>
<span class="token constant">GET</span> <span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span>hobbies<span class="token operator">/</span><span class="token number">1</span>   <span class="token comment">//\u83B7\u53D6id\u4E3A1\u7684\u7528\u6237\u7684id\u4E3A1\u7684\u7231\u597D  /api/users/1/hobbies?id=1</span>
<span class="token constant">POST</span> <span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span>hobbies    <span class="token comment">// \u7ED9id\u4E3A1\u7684\u7528\u6237\u65B0\u589E\u4E00\u4E2A\u7231\u597D</span>
<span class="token constant">PUT</span>  <span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span>hobbies<span class="token operator">/</span><span class="token number">1</span>   <span class="token comment">//\u4FEE\u6539id\u4E3A1\u7684\u7528\u6237\u7684id\u4E3A1\u7684\u7231\u597D\u4FE1\u606F</span>
<span class="token constant">PATCH</span> <span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span>hobbies<span class="token operator">/</span><span class="token number">1</span>   <span class="token comment">//\u66F4\u65B0id\u4E3A1\u7684\u7528\u6237\u7684id\u4E3A1\u7684\u7231\u597D\u7684\u67D0\u4E9B\u4FE1\u606F</span>
<span class="token constant">DELETE</span> <span class="token operator">/</span>api<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span>hobbies<span class="token operator">/</span><span class="token number">1</span>   <span class="token comment">//\u5220\u9664id\u4E3A1\u7684\u7528\u6237\u7684id\u4E3A1\u7684\u7231\u597D</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>api\u4E2D\u5E94\u6709\u7248\u672C\u63A7\u5236</p><div class="language-js line-numbers-mode"><pre><code><span class="token constant">GET</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users    
<span class="token constant">GET</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span>   
<span class="token constant">POST</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users    
<span class="token constant">PUT</span>  <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span>  
<span class="token constant">PATCH</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span> 
<span class="token constant">DELETE</span> <span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>users<span class="token operator">/</span><span class="token number">1</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>\u5BF9\u8D44\u6E90\u8FDB\u884C\u5BF9\u5E94\u64CD\u4F5C\u540E\uFF0C \u5E94\u8FD4\u56DE\u64CD\u4F5C\u540E\u7684\u8D44\u6E90</p><blockquote><p>\u5404HTTP\u65B9\u6CD5\u6210\u529F\u5904\u7406\u540E\u7684\u6570\u636E\u683C\u5F0F\uFF1A</p><table><thead><tr><th style="text-align:left;">\xB7</th><th style="text-align:left;">response \u683C\u5F0F</th></tr></thead><tbody><tr><td style="text-align:left;">GET</td><td style="text-align:left;">\u5355\u4E2A\u5BF9\u8C61\u3001\u96C6\u5408</td></tr><tr><td style="text-align:left;">POST</td><td style="text-align:left;">\u65B0\u589E\u6210\u529F\u7684\u5BF9\u8C61</td></tr><tr><td style="text-align:left;">PUT/PATCH</td><td style="text-align:left;">\u66F4\u65B0\u6210\u529F\u7684\u5BF9\u8C61</td></tr><tr><td style="text-align:left;">DELETE</td><td style="text-align:left;">\u7A7A</td></tr></tbody></table></blockquote></li><li><p>\u53EA\u7528\u4EE5\u4E0B\u5E38\u89C1\u76843\u79CDbody format</p><blockquote><p>PUT, PATCH, POST\u8BF7\u6C42\u7684body\u4F53\u4E2D\uFF0C\u4F7F\u7528JSON\u683C\u5F0F\u7684\u6570\u636E\uFF0C\u800C\u4E0D\u662Fform\u8868\u5355\u5F62\u5F0F\u7684\u6570\u636E</p><ol><li><strong>Content-Type: application/json</strong></li></ol><div class="language-"><pre><code>POST /v1/animal HTTP/1.1
Host: api.example.org
Accept: application/json
Content-Type: application/json
Content-Length: 24

{   
  &quot;name&quot;: &quot;Gir&quot;,
  &quot;animalType&quot;: &quot;12&quot;
}
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="2"><li><strong>Content-Type: application/x-www-form-urlencoded</strong> (\u6D4F\u89C8\u5668POST\u8868\u5355\u7528\u7684\u683C\u5F0F)</li></ol><div class="language-"><pre><code>POST /login HTTP/1.1
Host: example.com
Content-Length: 31
Accept: text/html
Content-Type: application/x-www-form-urlencoded

username=root&amp;password=Zion0101
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3"><li><strong>Content-Type: multipart/form-data</strong> (\u8868\u5355\u6709\u6587\u4EF6\u4E0A\u4F20\u65F6\u7684\u683C\u5F0F)</li></ol></blockquote><p><a href="http://jsrun.net/If8Kp/edit" target="_blank" rel="noopener noreferrer">\u4E3A\u4EC0\u4E48\u63A8\u8350\u7528json\u800C\u4E0D\u662FformData</a></p><p><img src="https://gitlab.com/lixiangteam/blogImg/uploads/2b2ada95612f9998e86c887a78a2fc5c/image-20210723093355687.png" alt=""></p><p><img src="https://gitlab.com/lixiangteam/blogImg/uploads/356fa8a29ba647b164314f0cd79180a7/image-20210723093436285.png" alt=""></p></li><li><p>url\u8DEF\u5F84\u4E2D\u4F7F\u7528\u4E0B\u5212\u7EBF\u5206\u5272</p></li><li><p>\u63D0\u4F9B\u9ED8\u8BA4\u7684\u8D44\u6E90\u521B\u5EFA\u65F6\u95F4created_at\u548C\u66F4\u65B0\u65F6\u95F4updated_at</p></li><li><p><a href="https://hoge.yuque.com/docs/share/8e8b0c9d-bdd9-4f94-86bf-5cc0806531cd?#%20%E3%80%8AAPI%E8%AE%BE%E8%AE%A1%E6%96%87%E6%A1%A3%E8%BE%93%E5%87%BA%E8%A7%84%E8%8C%83%E3%80%8B" target="_blank" rel="noopener noreferrer">\u4E2D\u53F0api\u8F93\u51FA\u89C4\u8303</a></p></li></ol><h1 id="restful\u5B9E\u7528\u6027" tabindex="-1">RESTful\u5B9E\u7528\u6027 <a class="header-anchor" href="#restful\u5B9E\u7528\u6027" aria-hidden="true">#</a></h1><p>RESTful\u770B\u8D77\u6765\u5F88\u7F8E\u597D\uFF0C\u5B9E\u9645\u4F7F\u7528\u7684\u65F6\u5019\u5374\u4E0D\u4E00\u5B9A\u5B9E\u7528\uFF0C \u5B83\u5C06\u4E00\u5207\u4E1C\u897F\u90FD\u770B\u505A\u8D44\u6E90\uFF0C \u4F46\u662F\u5728\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C \u4E00\u4E9B\u4E1C\u897F\u5F88\u96BE\u7528\u8D44\u6E90\u6765\u63CF\u8FF0\uFF0C \u6BD4\u5982\u767B\u5F55</p><p><code>api/login</code> login\u662F\u4E00\u4E2A\u52A8\u8BCD\uFF0C \u4E0D\u592ARESTful\uFF0C \u4F46\u662F\u53EF\u4EE5\u5F88\u76F4\u89C2\u7684\u770B\u51FA\u6765\u6211\u4EEC\u8981\u5E72\u5417\u3002\u5982\u679C\u5F3A\u884C\u4F7F\u7528RESTful\uFF0C\u53EF\u80FD\u9996\u5148\u8981\u60F3\u4E00\u4E0B\u6539\u7528\u4EC0\u4E48\u8D44\u6E90\u8868\u793A\uFF0C \u60F3\u60F3\u53EF\u80FD\u662F\u7528session\uFF0C\u7136\u540E\u5BF9session\u8FDB\u884C\u589E\u5220\u6539\u67E5\uFF0C \u8FD9\u6837\u5C31\u5F88\u96BE\u7406\u89E3\u3002</p><p>\u4E0D\u8981\u4E3A\u4E86RESTful\u800CRESTful</p>`,18),o=[p];function r(l,c,i,E,u,d){return n(),a("div",null,o)}var k=s(t,[["render",r]]);export{m as __pageData,k as default};
