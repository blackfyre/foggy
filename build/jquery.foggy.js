!function(t){t.fn.foggy=function(e){var i,n={opacity:.8,blurRadius:2,quality:16,cssFilterSupport:!0},s={opacity:1,blurRadius:0};i=0==e?t.extend(n,s):t.extend(n,e);var r=function(t,e,i,n){this.content=t,this.position=e,this.offset=i,this.opacity=n};r.prototype.render=function(e){t("<div/>",{html:this.content,"class":"foggy-pass-"+this.position}).css({position:this.position,opacity:this.opacity,top:this.offset[0],left:this.offset[1]}).appendTo(e)};var o=function(t){this.radius=t};o.prototype.includes=function(t,e){return Math.pow(t,2)+Math.pow(e,2)<=Math.pow(this.radius,2)},o.prototype.points=function(){for(var t=[],e=-this.radius;e<=this.radius;e++)for(var i=-this.radius;i<=this.radius;i++)this.includes(e,i)&&t.push([e,i]);return t};var a=function(t,e){this.element=t,this.settings=e};a.prototype.calculateOffsets=function(e,i){var n,s=t.grep(new o(e).points(),function(t){return 0!=t[0]||0!=t[1]});if(s.length<=i)n=s;else{for(var r=s.length-i,a=[],u=0;r>u;u++)a.push(Math.round(u*(s.length/r)));n=t.grep(s,function(e,i){return t.inArray(i,a)<0})}return n},a.prototype.getContent=function(){var e=t(this.element).find(".foggy-pass-relative")[0];return e?t(e).html():t(this.element).html()},a.prototype.render=function(){var e=this.getContent();t(this.element).empty();var i=t("<div/>").css({position:"relative"}),n=this.calculateOffsets(2*this.settings.blurRadius,this.settings.quality),s=1.2*this.settings.opacity/(n.length+1);new r(e,"relative",[0,0],s).render(i),t(n).each(function(t,n){new r(e,"absolute",n,s).render(i)}),i.appendTo(this.element)};var u=function(t,e){this.element=t,this.settings=e};return u.prototype.render=function(){var e=((""+i.opacity).slice(2,4),this.settings.blurRadius);t(this.element).css({"-webkit-filter":"blur("+e+"px)",filter:"blur("+e+"px)",opacity:i.opacity})},this.each(function(t,e){i.cssFilterSupport&&"filter"in document.body.style?new u(e,i).render():new a(e,i).render()})}}(jQuery);