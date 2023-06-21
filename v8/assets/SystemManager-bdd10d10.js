import{v as le,i as N,w as _e,m as se,k as W,x as ce,b as $,j as me,t as Fe,E as g,F as ze,y as er,M as H,q as be,z as pe,g as ft,P as ge,B as Ae,A as tr,R as bt,n as F,D as pt,S as rr,h as gt,a as mt,H as Te,s as xe,I as nr,J as ir,K as Ke,C as or,u as ar,N as sr,O as lr,Q as cr,V as ur,W as dr,X as hr,Y as fr,Z as ee,_ as Ye,$ as br,a0 as pr,a1 as xt,a2 as qe,a3 as gr}from"./index-a00422df.js";function mr({vertexSrc:n,fragmentSrc:e,maxTextures:t,name:r}){if(e.indexOf("%count%")<0)throw new Error('Fragment template must contain "%count%".');if(e.indexOf("%forloop%")<0)throw new Error('Fragment template must contain "%forloop%".');const i=xr(t);return e=e.replace(/%count%/gi,`${t}`),e=e.replace(/%forloop%/gi,i),r=r?`${r}-`:"",new le({vertex:n,fragment:e,name:`${r}batch`})}function xr(n){const e=[];for(let t=0;t<n;t++)t>0&&e.push("else"),t<n-1&&e.push(`if(vTextureId < ${t}.5)`),e.push("{"),e.push(`	outColor = texture(uSamplers[${t}], vTextureCoord);`),e.push("}");return e.join(`
`)}const Z=16,vt=new Int32Array(Z);for(let n=0;n<Z;n++)vt[n]=n;const vr=new N({uSamplers:{value:vt,type:`array<u32,${Z}>`}},{isStatic:!0}),Xe=new Float32Array(1),Je=new Uint32Array(1);class yr extends _e{constructor(){const t=new se({data:Xe,label:"attribute-batch-buffer",usage:W.VERTEX|W.COPY_DST}),r=new se({data:Je,label:"index-batch-buffer",usage:W.INDEX|W.COPY_DST}),i=6*4;super({attributes:{aPosition:{buffer:t,shaderLocation:0,format:"float32x2",stride:i,offset:0},aUV:{buffer:t,shaderLocation:1,format:"float32x2",stride:i,offset:2*4},aColor:{buffer:t,shaderLocation:2,format:"unorm8x4",stride:i,offset:4*4},aTextureId:{buffer:t,shaderLocation:3,format:"float32",stride:i,offset:5*4}},indexBuffer:r})}reset(){this.indexBuffer.data=Je,this.buffers[0].data=Xe}}function Sr({vertex:n,fragment:e,maxTextures:t}){if(e.source.indexOf("%bindings%")<0)throw new Error('Fragment template must contain "%bindings%".');if(e.source.indexOf("%forloop%")<0)throw new Error('Fragment template must contain "%forloop%".');const r=Tr(t),i=wr(t);let o=e.source;o=o.replace(/%bindings%/gi,r),o=o.replace(/%forloop%/gi,i);let a=n.source;return a===e.source&&(a=o),new ce({vertex:{source:a,entryPoint:n.entryPoint},fragment:{source:o,entryPoint:e.entryPoint}})}function wr(n){const e=[];if(n===1)e.push("outColor = textureSampleGrad(textureSource1, textureSampler1, uv, uvDx, uvDy);");else{e.push("switch textureId {");for(let t=0;t<n;t++)t===n-1?e.push("  default:{"):e.push(`  case ${t}:{`),e.push(`      outColor = textureSampleGrad(textureSource${t+1}, textureSampler${t+1}, uv, uvDx, uvDy);`),e.push("      break;}");e.push("}")}return e.join(`
`)}function Tr(n){const e=[];if(n===1)e.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),e.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let t=0;for(let r=0;r<n;r++)e.push(`@group(1) @binding(${t++}) var textureSource${r+1}: texture_2d<f32>;`),e.push(`@group(1) @binding(${t++}) var textureSampler${r+1}: sampler;`)}return e.join(`
`)}const Br=new Float32Array(1),Mr=new Uint32Array(1);function Cr(){const e=new se({data:Br,label:"attribute-batch-buffer",usage:W.VERTEX|W.COPY_DST}),t=new se({data:Mr,label:"index-batch-buffer",usage:W.INDEX|W.COPY_DST}),r=6*4;return new _e({attributes:{aPosition:{buffer:e,shaderLocation:0,format:"float32x2",stride:r,offset:0},aUV:{buffer:e,shaderLocation:1,format:"float32x2",stride:r,offset:2*4},aColor:{buffer:e,shaderLocation:2,format:"unorm8x4",stride:r,offset:4*4},aTextureId:{buffer:e,shaderLocation:3,format:"float32",stride:r,offset:5*4}},indexBuffer:t})}const yt={};function kr(n){const e=n.map(t=>t.styleSourceKey).join("-");return yt[e]||Pr(n,e)}function Pr(n,e){const t={};let r=0;for(let o=0;o<Z;o++){const a=o<n.length?n[o]:$.EMPTY.source;t[r++]=a.source,t[r++]=a.style}const i=new me(t);return yt[e]=i,i}class Qe{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}}function Ze(n,e){const t=n.byteLength/8|0,r=new Float64Array(n,0,t),i=new Float64Array(e,0,t);for(let s=0;s<t;s++)i[s]=r[s];const o=new Uint8Array(n,t*8),a=new Uint8Array(e,t*8);for(let s=0;s<o.length;s++)a[s]=o[s]}const et=[];let Be=0;const Rr=[];let Me=0;const Ce={};function Ur(n,e,t,r){Be=0,Me=0;const i=16,o=n.textures,a=e.textures,s=Rr;for(let c=0;c<a.length;c++)s[c]=a[c],Me++;for(let c=0;c<o.length;c++)a[c]=o[c];const l=e.batchLocations;for(let c=0;c<Me;c++){const u=s[c];let d=!1;for(let b=0;b<o.length;b++)if(u===o[b]){d=!0,Ce[c]=t,l[u.styleSourceKey]=b;break}d||(et[Be++]=s[c])}for(let c=0;c<Be;c++){const u=et[c];for(let d=0;d<i;d++){const b=(d+r)%16;if(Ce[b]!==t){a[b]=u,Ce[b]=t,l[u.styleSourceKey]=b;break}}}return e}const Dr=[];let ke=0;class Lr{constructor(){this.textures=[],this.size=0,this.batchLocations={}}}class _r{constructor(){this.textureTicks={},this.tick=1e3}begin(){ke=0,this.bindingOffset=0,this.reset()}reset(){this.tick++,this.output=Dr[ke++]||new Lr,this.output.size=0}finish(e){let t=this.output;return e&&e.textures.length&&t.textures.length&&(t=Ur(e,t,this.tick,this.bindingOffset++)),this.reset(),t}add(e){const t=this.tick,r=this.textureTicks;if(r[e.styleSourceKey]===t)return!0;const i=e.styleSourceKey,o=this.output;return o.size===Z?!1:(o.textures[o.size]=e,r[i]=t,o.batchLocations[i]=o.size++,ke=0,!0)}destroy(){this.output=null,this.textureTicks=null}}class tt{constructor(){this.type="batch",this.action="renderer",this.elementStart=0,this.elementSize=0,this.start=0,this.size=0,this.canBundle=!0}destroy(){this.textures=null,this.batchParent=null}}class St{constructor(e=4,t=6){this.maxSize=4096*20,this.dirty=!0,this.batchIndex=0,this.batches=[],this.vertexSize=6,this.textureBatcher=new _r,this.elements=[],this.attributeBuffer=new Qe(e*this.vertexSize*4),this.indexBuffer=new Uint32Array(t)}begin(){this.batchIndex=0,this.currentBlendMode="inherit";let e=this.batches[this.batchIndex];e||(e=this.batches[this.batchIndex]=new tt),e.elementSize=0,e.start=0,e.size=0,this.attributeSize=0,this.indexSize=0,this.elementSize=0,this.textureBatcher.begin(),this.dirty=!0}add(e){let t=this.batches[this.batchIndex];const r=e.texture,i=e.blendMode;(this.currentBlendMode!==i||t.elementSize>=this.maxSize||!this.textureBatcher.add(r))&&(this.break(!1),this.currentBlendMode=i,t=this.batches[this.batchIndex],t.blendMode=i,this.textureBatcher.add(r)),t.elementSize++,e.batcher=this,e.batch=t,e.location=this.attributeSize,e.indexStart=this.indexSize,this.indexSize+=e.indexSize,this.attributeSize+=e.vertexSize*this.vertexSize,this.elements[this.elementSize++]=e}checkAndUpdateTexture(e,t){const r=e.batch.textures.batchLocations[t.styleSourceKey];return r===void 0?!1:(e.textureId=r,e.texture=t,!0)}updateElement(e){this.dirty=!0,e.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,e.location,e.textureId)}hideElement(e){this.dirty=!0;const t=this.attributeBuffer.float32View;let r=e.location;for(let i=0;i<e.vertexSize;i++)t[r]=0,t[r+1]=0,r+=6}break(e){if(this.elementSize===0)return;let t;this.batchIndex>0&&(t=this.batches[this.batchIndex-1]),this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const r=this.batches[this.batchIndex];r.size=this.indexSize-r.start,!e&&t?r.textures=this.textureBatcher.finish(t.textures):r.textures=this.textureBatcher.finish();const i=this.elementSize-r.elementStart;for(let a=0;a<i;a++){const s=this.elements[r.elementStart+a];s.textureId=r.textures.batchLocations[s.texture.styleSourceKey],s.packAttributes(this.attributeBuffer.float32View,this.attributeBuffer.uint32View,s.location,s.textureId),s.packIndex(this.indexBuffer,s.indexStart,s.location/this.vertexSize)}this.batchIndex++;let o=this.batches[this.batchIndex];o||(o=this.batches[this.batchIndex]=new tt),o.blendMode=this.currentBlendMode,o.elementStart=this.elementSize,o.elementSize=0,o.start=this.indexSize}finish(){if(this.break(!1),this.elementSize===0)return;const e=this.batches[this.batchIndex];if(e.size=this.indexSize-e.start,this.batchIndex>0){const t=this.batches[this.batchIndex-1];e.textures=this.textureBatcher.finish(t.textures);return}e.textures=this.textureBatcher.finish()}update(){}ensureAttributeBuffer(e){e*4<this.attributeBuffer.size||this._resizeAttributeBuffer(e*4)}ensureIndexBuffer(e){e<this.indexBuffer.length||this._resizeIndexBuffer(e)}_resizeAttributeBuffer(e){const t=Math.max(e,this.attributeBuffer.size*2),r=new Qe(t);Ze(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(e){const t=this.indexBuffer,r=Math.max(e,t.length*2),i=new Uint32Array(r);Ze(t.buffer,i.buffer),this.indexBuffer=i}destroy(){for(let e=0;e<this.batches.length;e++)this.batches[e].destroy();this.batches=null;for(let e=0;e<this.elements.length;e++)this.elements[e].batch=null;this.elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null,this.textureBatcher.destroy(),this.boundTextures=null}}class wt{constructor(e,t){this.toUpdate=[],this.state=Fe.for2d(),this._batches={},this.renderer=e,this.adaptor=t,this.adaptor.init()}buildStart(e){this.lastBatch=0,this._batches[e.uid]||(this._batches[e.uid]={batcher:new St,geometry:Cr()}),this._batches[e.uid].batcher.begin()}addToBatch(e,t){this._batches[t.uid].batcher.add(e)}break(e){const t=this._batches[e.uid].batcher,r=e.instructionSize>0&&e.lastInstruction().type!=="batch";for(t.break(r);this.lastBatch<t.batchIndex;){const i=t.batches[this.lastBatch++];i.elementSize!==0&&(i.batchParent=this._batches[e.uid],e.instructions[e.instructionSize++]=i)}}buildEnd(e){this.break(e);const{geometry:t,batcher:r}=this._batches[e.uid];r.elementSize!==0&&(r.finish(),t.indexBuffer.data=r.indexBuffer,t.buffers[0].data=r.attributeBuffer.float32View,t.indexBuffer.update(r.indexSize*4))}upload(e){const t=this._batches[e.uid];if(t&&t.batcher.dirty){t.batcher.dirty=!1;const r=t.geometry.buffers[0];r.update(t.batcher.attributeSize*4),this.renderer.buffer.updateBuffer(r)}}execute(e){this.adaptor.execute(this,e)}destroy(){this.toUpdate=null,this.instructionSet=null,this.activeBatcher=null,this.state=null,this._batches=null,this.renderer=null,this.adaptor.destroy(),this.adaptor=null;for(const e in this._batches){const t=this._batches[e];t.batcher.destroy(),t.geometry.destroy()}}}wt.extension={type:[g.WebGLRendererPipes,g.WebGPURendererPipes,g.CanvasRendererPipes],name:"batch"};var Fr=`
in vec2 vTextureCoord;
in vec2 backgroundUv;
in vec4 vColor;

out vec4 fragColor;

uniform float uBlend;

uniform sampler2D myTexture;
uniform sampler2D backTexture;

{FUNCTIONS}

void main()
{ 
    vec4 back = texture(backTexture, backgroundUv);
    vec4 front = texture(myTexture, vTextureCoord);

    {MAIN}
}
`,zr=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 backgroundUv;

uniform globalUniforms {
  mat3 projectionMatrix;
  mat3 worldTransformMatrix;
  float worldAlpha;
};

uniform vec4 inputSize;
uniform vec4 outputFrame;
uniform vec4 backgroundFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;
    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (outputFrame.zw * inputSize.zw);
}

vec2 filterBackgroundTextureCoord( void ) 
{
    return aPosition * aPosition * backgroundFrame.zw;
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    backgroundUv = filterBackgroundTextureCoord();
}
`,Ar=`struct GlobalUniforms {
  projectionMatrix:mat3x3<f32>,
  worldTransformMatrix:mat3x3<f32>,
  worldAlpha: f32
}

struct GlobalFilterUniforms {
  inputSize:vec4<f32>,
  inputPixel:vec4<f32>,
  inputClamp:vec4<f32>,
  outputFrame:vec4<f32>,
  backgroundFrame:vec4<f32>,
  globalFrame:vec4<f32>,
};

struct BlendUniforms {
  uBlend:f32,
};

@group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;

@group(1) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(1) @binding(1) var myTexture: texture_2d<f32>;
@group(1) @binding(2) var mySampler : sampler;
@group(1) @binding(3) var backTexture: texture_2d<f32>;

@group(2) @binding(0) var<uniform> blendUniforms : BlendUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) backgroundUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.outputFrame.zw + gfu.outputFrame.xy;

    return vec4((globalUniforms.projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.outputFrame.zw * gfu.inputSize.zw);
}

fn filterBackgroundTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * aPosition * gfu.backgroundFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.globalFrame.zw) + (gfu.globalFrame.xy / gfu.globalFrame.zw);  
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   filterBackgroundTextureCoord(aPosition),
  );
}

{FUNCTIONS}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) backgroundUv: vec2<f32>,
) -> @location(0) vec4<f32> {


   var back =  textureSample(backTexture, mySampler, backgroundUv);
   var front = textureSample(myTexture, mySampler, uv);
   
   var out = vec4<f32>(0.0,0.0,0.0,0.0);

   {MAIN}

   return out;
}`;class z extends ze{constructor(e){const t=e.gpu,r=rt({source:Ar,...t}),i=new ce({vertex:{source:r,entryPoint:"mainVertex"},fragment:{source:r,entryPoint:"mainFragment"}}),o=e.gl,a=rt({source:Fr,...o}),s=new le({vertex:zr,fragment:a}),l=new N({uBlend:{value:1,type:"f32"}});super({gpuProgram:i,glProgram:s,blendRequired:!0,resources:{blendUniforms:l,backTexture:$.EMPTY}})}}function rt(n){const{source:e,functions:t,main:r}=n;return e.replace("{FUNCTIONS}",t).replace("{MAIN}",r)}const Ge=`
	float getLuminosity(vec3 c) {
		return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
	}

	vec3 setLuminosity(vec3 c, float lum) {
		float modLum = lum - getLuminosity(c);
		vec3 color = c.rgb + vec3(modLum);

		// clip back into legal range
		modLum = getLuminosity(color);
		vec3 modLumVec = vec3(modLum);

		float cMin = min(color.r, min(color.g, color.b));
		float cMax = max(color.r, max(color.g, color.b));

		if(cMin < 0.0) {
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0) {
			color = mix(modLumVec, color, (1.0 - modLum) / (cMax - modLum));
		}

		return color;
	}

	float getSaturation(vec3 c) {
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	vec3 setSaturationMinMidMax(vec3 cSorted, float s) {
		vec3 colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x) {
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else {
			colorSorted.y = 0.0;
			colorSorted.z = 0.0;
		}

		colorSorted.x = 0.0;

		return colorSorted;
	}

	vec3 setSaturation(vec3 c, float s) {
		vec3 color = c;

		if(color.r <= color.g && color.r <= color.b) {
			if(color.g <= color.b) {
				color = setSaturationMinMidMax(color.rgb, s).rgb;
			}
			else {
				color = setSaturationMinMidMax(color.rbg, s).rbg;
			}
		}
		else if(color.g <= color.r && color.g <= color.b) {
			if(color.r <= color.b) {
				color = setSaturationMinMidMax(color.grb, s).grb;
			}
			else {
				color = setSaturationMinMidMax(color.gbr, s).gbr;
			}
		}
		else {
			// Using bgr for both fixes part of hue
			if(color.r <= color.g) {
				color = setSaturationMinMidMax(color.brg, s).brg;
			}
			else {
				color = setSaturationMinMidMax(color.bgr, s).bgr;
			}
		}

		return color;
	}
    `,Ie=`
	fn getLuminosity(c: vec3<f32>) -> f32
	{
		return 0.3*c.r + 0.59*c.g + 0.11*c.b;
	}

	fn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32>
	{
		var modLum: f32 = lum - getLuminosity(c);
		var color: vec3<f32> = c.rgb + modLum;

		// clip back into legal range
		modLum = getLuminosity(color);
		let modLumVec = vec3<f32>(modLum);

		let cMin: f32 = min(color.r, min(color.g, color.b));
		let cMax: f32 = max(color.r, max(color.g, color.b));

		if(cMin < 0.0)
		{
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0)
		{
			color = mix(modLumVec, color, (1 - modLum) / (cMax - modLum));
		}

		return color;
	}

	fn getSaturation(c: vec3<f32>) -> f32
	{
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	fn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32>
	{
		var colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x)
		{
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else
		{
			colorSorted.y = 0;
			colorSorted.z = 0;
		}

		colorSorted.x = 0;

		return colorSorted;
	}

	fn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32>
	{
		var color = c;

		if (color.r <= color.g && color.r <= color.b)
		{
			if (color.g <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rgb, s)).rgb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rbg, s)).rbg;
			}
		}
		else if (color.g <= color.r && color.g <= color.b)
		{
			if (color.r <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.grb, s)).grb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.gbr, s)).gbr;
			}
		}
		else
		{
			// Using bgr for both fixes part of hue
			if (color.r <= color.g)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.brg, s)).brg;
			}
			else
			{
				color  = vec3<f32>(setSaturationMinMidMax(color.bgr, s)).bgr;
			}
		}

		return color;
	}
	`;var Gr=`in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D myTexture;
uniform sampler2D mapTexture;

uniform float alpha;
uniform vec4 maskClamp;

out vec4 fragColor;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    // TODO look into why this is needed
    float npmAlpha = alpha; 
    vec4 original = texture(myTexture, vTextureCoord);
    vec4 masky = texture(mapTexture, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    fragColor = original;
}
`,Ir=`in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;

uniform globalUniforms {
  mat3 projectionMatrix;
  mat3 worldTransformMatrix;
  float worldAlpha;
};

uniform vec4 inputSize;
uniform vec4 outputFrame;
uniform mat3 filterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (outputFrame.zw * inputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( filterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}
`,nt=`struct GlobalUniforms {
  projectionMatrix:mat3x3<f32>,
  worldTransformMatrix:mat3x3<f32>,
  worldAlpha: f32
}

struct GlobalFilterUniforms {
  inputSize:vec4<f32>,
  inputPixel:vec4<f32>,
  inputClamp:vec4<f32>,
  outputFrame:vec4<f32>,
  backgroundFrame:vec4<f32>,
  globalFrame:vec4<f32>,
};

struct MaskUniforms {
  filterMatrix:mat3x3<f32>,
  maskClamp:vec4<f32>,
  alpha:f32,
};



@group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;

@group(1) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(1) @binding(1) var myTexture: texture_2d<f32>;
@group(1) @binding(2) var mySampler : sampler;
@group(1) @binding(3) var backTexture: texture_2d<f32>;

@group(2) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(2) @binding(1) var mapTexture: texture_2d<f32>;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) backgroundUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.outputFrame.zw + gfu.outputFrame.xy;

    return vec4((globalUniforms.projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.outputFrame.zw * gfu.inputSize.zw);
}

fn filterBackgroundTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * gfu.backgroundFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.globalFrame.zw) + (gfu.globalFrame.xy / gfu.globalFrame.zw);  
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.filterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{

  
  return gfu.globalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var maskClamp = filterUniforms.maskClamp;

     var clip = step(3.5,
        step(maskClamp.x, filterUv.x) +
        step(maskClamp.y, filterUv.y) +
        step(filterUv.x, maskClamp.z) +
        step(filterUv.y, maskClamp.w));

    var mask = textureSample(mapTexture, mySampler, filterUv);
    var source = textureSample(myTexture, mySampler, uv);
    
    var npmAlpha = 0.0;

    var alphaMul = 1.0 - npmAlpha * (1.0 - mask.a);

   
    //return source * (alphaMul * masky.r * alpha * clip);
    return source  * (alphaMul * mask.r) * clip;//  * (alphaMul * mask.r) * clip;// * filterUniforms.alpha * clip);
}`;class Er extends ze{constructor({sprite:e}){const t=new er(e.texture),r=new N({filterMatrix:{value:new H,type:"mat3x3<f32>"},maskClamp:{value:t.uClampFrame,type:"vec4<f32>"},alpha:{value:1,type:"f32"}}),i=new ce({vertex:{source:nt,entryPoint:"mainVertex"},fragment:{source:nt,entryPoint:"mainFragment"}}),o=le.from({vertex:Ir,fragment:Gr,name:"mask-filter"});super({gpuProgram:i,glProgram:o,resources:{filterUniforms:r,mapTexture:e.texture.source}}),this.sprite=e,this.textureMatrix=t}apply(e,t,r,i){this.textureMatrix.texture=this.sprite.texture,e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.filterMatrix,this.sprite).prepend(this.textureMatrix.mapCoord),this.resources.mapTexture=this.sprite.texture.source,e.applyFilter(this,t,r,i)}}class Tt{constructor(e){this.filterGlobalUniforms=new N({inputSize:{value:new Float32Array(4),type:"vec4<f32>"},inputPixel:{value:new Float32Array(4),type:"vec4<f32>"},inputClamp:{value:new Float32Array(4),type:"vec4<f32>"},outputFrame:{value:new Float32Array(4),type:"vec4<f32>"},backgroundFrame:{value:new Float32Array(4),type:"vec4<f32>"},globalFrame:{value:new Float32Array(4),type:"vec4<f32>"}}),this.renderer=e}push(e,t,r){this.renderer.renderPipes.batch.break(r),r.add({type:"filter",canBundle:!1,action:"pushFilter",container:t,filterEffect:e})}pop(e,t,r){this.renderer.renderPipes.batch.break(r),r.add({type:"filter",action:"popFilter",canBundle:!1})}execute(e){e.action==="pushFilter"?this.renderer.filter.push(e):e.action==="popFilter"&&this.renderer.filter.pop()}destroy(){this.renderer=null,this.filterGlobalUniforms=null}}Tt.extension={type:[g.WebGLRendererPipes,g.WebGPURendererPipes,g.CanvasRendererPipes],name:"filter"};let Hr=0;class Vr{constructor(e){this.poolKeyHash={},this.texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,t,r){const i=new be({...this.textureOptions,width:e,height:t,resolution:1,antialias:r});return new $({source:i,label:`texturePool_${Hr++}`})}getOptimalTexture(e,t,r=1,i){let o=Math.ceil(e*r-1e-6),a=Math.ceil(t*r-1e-6);o=pe(o),a=pe(a);const s=(o<<17)+(a<<1)+(i?1:0);this.texturePool[s]||(this.texturePool[s]=[]);let l=this.texturePool[s].pop();return l||(l=this.createTexture(o,a,i)),l.source._resolution=r,l.source.width=o/r,l.source.height=a/r,l.source.pixelWidth=o,l.source.pixelHeight=a,l.frameX=0,l.frameY=0,l.frameWidth=e,l.frameHeight=t,l.layout.update(),this.poolKeyHash[l.id]=s,l}getSameSizeTexture(e){const t=e.source;return this.getOptimalTexture(t.width,t.height,t._resolution,t.antialias)}returnTexture(e){const t=this.poolKeyHash[e.id];this.texturePool[t].push(e)}clear(e){if(e=e!==!1,e)for(const t in this.texturePool){const r=this.texturePool[t];if(r)for(let i=0;i<r.length;i++)r[i].destroy(!0)}this.texturePool={}}}const O=new Vr;function Or(n,e){e.clear();const t=e.matrix;for(let r=0;r<n.length;r++){const i=n[r];i.layerVisibleRenderable<3||(e.matrix=i.worldTransform,i.view.addBounds(e))}return e.matrix=t,e}const Wr=new _e({attributes:{aPosition:{buffer:new Float32Array([0,0,1,0,1,1,0,1]),shaderLocation:0,format:"float32x2",stride:2*4,offset:0}},indexBuffer:new Uint32Array([0,1,2,0,2,3])});class Bt{constructor(e){this.filterStackIndex=0,this.filterStack=[],this.filterGlobalUniforms=new N({inputSize:{value:new Float32Array(4),type:"vec4<f32>"},inputPixel:{value:new Float32Array(4),type:"vec4<f32>"},inputClamp:{value:new Float32Array(4),type:"vec4<f32>"},outputFrame:{value:new Float32Array(4),type:"vec4<f32>"},backgroundFrame:{value:new Float32Array(4),type:"vec4<f32>"},globalFrame:{value:new Float32Array(4),type:"vec4<f32>"}}),this.globalFilterBindGroup=new me({}),this.renderer=e}push(e){const t=this.renderer,r=e.filterEffect.filters;this.filterStack[this.filterStackIndex]||(this.filterStack[this.filterStackIndex]=this.getFilterData());const i=this.filterStack[this.filterStackIndex];this.filterStackIndex++;const o=i.bounds;if(e.renderables?Or(e.renderables,o):ft(e.container,!0,o),r.length===0){i.skip=!0;return}let a=t.renderTarget.rootRenderTarget.colorTexture.source._resolution,s=0,l=t.renderTarget.rootRenderTarget.colorTexture.source.antialias,c=!1,u=!1;for(let d=0;d<r.length;d++){const b=r[d];a=Math.min(a,b.resolution),s+=b.padding,b.antialias!=="inherit"&&(b.antialias==="on"?l=!0:l=!1),u=b.enabled||u,c=c||b.blendRequired}if(!u){i.skip=!0;return}if(o.scale(a).fit(t.renderTarget.rootRenderTarget.viewport).scale(1/a).pad(s).ceil(),!o.isPositive){i.skip=!0;return}i.skip=!1,i.bounds=o,i.blendRequired=c,i.container=e.container,i.filterEffect=e.filterEffect,i.previousRenderSurface=t.renderTarget.renderTarget,i.inputTexture=O.getOptimalTexture(o.width,o.height,a,l),t.renderTarget.bind(i.inputTexture,!0),t.globalUniforms.push({offset:o})}pop(){const e=this.renderer;this.filterStackIndex--;const t=this.filterStack[this.filterStackIndex];if(t.skip)return;this.activeFilterData=t;const r=t.inputTexture,i=t.bounds;let o=$.EMPTY;t.blendRequired&&(e.encoder.finishRenderPass(),o=this.getBackTexture(t.previousRenderSurface,i));const a=ge.shared;this.filterStackIndex>0&&(a.x=this.filterStack[this.filterStackIndex-1].bounds.minX,a.y=this.filterStack[this.filterStackIndex-1].bounds.minY),this.updateGlobalFilterUniforms(i,r,o,a);const s=t.filterEffect.filters;this.filterGlobalUniforms.update();let l=this.filterGlobalUniforms;if(e.renderPipes.uniformBatch&&(l=e.renderPipes.uniformBatch.getUniformBufferResource(this.filterGlobalUniforms)),this.globalFilterBindGroup.setResource(l,0),this.globalFilterBindGroup.setResource(r.style,2),this.globalFilterBindGroup.setResource(o.source,3),s.length===1)e.globalUniforms.pop(),s[0].apply(this,r,t.previousRenderSurface,!1),O.returnTexture(r);else{let c=t.inputTexture;const u=this.filterGlobalUniforms.uniforms.outputFrame,d=u[0],b=u[1];if(u[0]=0,u[1]=0,this.filterGlobalUniforms.update(),e.renderPipes.uniformBatch){const v=e.renderPipes.uniformBatch.getUniformBufferResource(this.filterGlobalUniforms);this.globalFilterBindGroup.setResource(v,0)}let f=O.getOptimalTexture(i.width,i.height,c.source._resolution,!1),p=0;for(p=0;p<s.length-1;++p){s[p].apply(this,c,f,!0);const h=c;c=f,f=h}e.globalUniforms.pop(),e.renderPipes.uniformBatch?this.globalFilterBindGroup.setResource(l,0):(u[0]=d,u[1]=b,this.filterGlobalUniforms.update()),s[p].apply(this,c,t.previousRenderSurface,!1),O.returnTexture(c),O.returnTexture(f)}t.blendRequired&&O.returnTexture(o)}updateGlobalFilterUniforms(e,t,r,i){const o=e.minX,a=e.minY,s=this.filterGlobalUniforms.uniforms,l=s.outputFrame,c=s.inputSize,u=s.inputPixel,d=s.inputClamp,b=s.backgroundFrame,f=s.globalFrame;l[0]=o-i.x,l[1]=a-i.y,l[2]=t.frameWidth,l[3]=t.frameHeight,c[0]=t.source.width,c[1]=t.source.height,c[2]=1/c[0],c[3]=1/c[1],u[0]=t.source.pixelWidth,u[1]=t.source.pixelHeight,u[2]=1/u[0],u[3]=1/u[1],d[0]=.5*u[2],d[1]=.5*u[3],d[2]=t.frameWidth*c[2]-.5*u[2],d[3]=t.frameHeight*c[3]-.5*u[3],b[0]=0,b[1]=0,b[2]=r.layout.frame.width,b[3]=r.layout.frame.height;let p=this.renderer.renderTarget.rootRenderTarget.colorTexture.source._resolution;this.filterStackIndex>0&&(p=this.filterStack[this.filterStackIndex-1].inputTexture.source._resolution),f[0]=i.x*p,f[1]=i.y*p;const v=this.renderer.renderTarget.rootRenderTarget.colorTexture;f[2]=v.source.width*p,f[3]=v.source.height*p}getBackTexture(e,t){const r=e.colorTexture.source._resolution,i=O.getOptimalTexture(t.width,t.height,r,!1);let o=t.minX,a=t.minY;this.filterStackIndex&&(o-=this.filterStack[this.filterStackIndex-1].bounds.minX,a-=this.filterStack[this.filterStackIndex-1].bounds.minY),o=Math.floor(o*r),a=Math.floor(a*r);const s=Math.ceil(t.width*r),l=Math.ceil(t.height*r);return this.renderer.renderTarget.copyToTexture(e,i,{x:o,y:a},{width:s,height:l}),i}applyFilter(e,t,r,i){const o=this.renderer;o.renderTarget.bind(r,!!i),this.globalFilterBindGroup.setResource(t.source,1),e.groups[0]=o.globalUniforms.bindGroup,e.groups[1]=this.globalFilterBindGroup,o.encoder.draw({geometry:Wr,shader:e,state:e._state,topology:"triangle-list"})}getFilterData(){return{skip:!1,inputTexture:null,bounds:new Ae,container:null,filterEffect:null,blendRequired:!1,previousRenderSurface:null}}calculateSpriteMatrix(e,t){const r=this.activeFilterData,i=e.set(r.inputTexture._source.width,0,0,r.inputTexture._source.height,r.bounds.minX,r.bounds.minY),o=t.worldTransform.copyTo(H.shared);return o.invert(),i.prepend(o),i.scale(1/t.texture.frameWidth,1/t.texture.frameHeight),i.translate(t.anchor.x,t.anchor.y),i}destroy(){}}Bt.extension={type:[g.WebGLRendererSystem,g.WebGPURendererSystem],name:"filter"};function hi(n,e,t){e[t++]=(n&255)/255,e[t++]=(n>>8&255)/255,e[t++]=(n>>16&255)/255,e[t++]=(n>>24&255)/255}function $r(n,e,t){const r=n>>16&255,i=n>>8&255,o=n&255,a=e>>16&255,s=e>>8&255,l=e&255,c=r+(a-r)*t,u=i+(s-i)*t,d=o+(l-o)*t;return(c<<16)+(u<<8)+d}const jr=16777215+(16777215<<32);function Ee(n,e){const t=(n>>24&255)/255,r=(e>>24&255)/255,i=t*r*255,o=n&16777215,a=e&16777215;let s=16777215;return o+(a<<32)!==jr&&(o===16777215?s=a:a===16777215?s=o:s=$r(o,a,.5)),s+(i<<24)}class He{constructor(){this.batcher=null,this.batch=null,this.applyTransform=!0}get blendMode(){return this.applyTransform?this.renderable.layerBlendMode:"normal"}packIndex(e,t,r){const i=this.geometryData.indices;for(let o=0;o<this.indexSize;o++)e[t++]=i[o+this.indexOffset]+r-this.vertexOffset}packAttributes(e,t,r,i){const o=this.geometryData,a=o.vertices,s=o.uvs,l=this.vertexOffset*2,c=(this.vertexOffset+this.vertexSize)*2,u=this.color,d=u>>16|u&65280|(u&255)<<16;if(this.applyTransform){const b=this.renderable,f=Ee(d+(this.alpha*255<<24),b.layerColor),p=b.layerTransform,v=p.a,h=p.b,B=p.c,M=p.d,S=p.tx,y=p.ty;for(let U=l;U<c;U+=2){const G=a[U],R=a[U+1];e[r++]=v*G+B*R+S,e[r++]=h*G+M*R+y,e[r++]=s[U],e[r++]=s[U+1],t[r++]=f,e[r++]=i}}else{const b=d+(this.alpha*255<<24);for(let f=l;f<c;f+=2)e[r++]=a[f],e[r++]=a[f+1],e[r++]=s[f],e[r++]=s[f+1],t[r++]=b,e[r++]=i}}get vertSize(){return this.vertexSize}copyTo(e){e.indexOffset=this.indexOffset,e.indexSize=this.indexSize,e.vertexOffset=this.vertexOffset,e.vertexSize=this.vertexSize,e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.geometryData=this.geometryData}}const Pe={build(n,e){let t,r,i,o,a,s;if(n.type==="circle"){const y=n;t=y.x,r=y.y,a=s=y.radius,i=o=0}else if(n.type==="ellipse"){const y=n;t=y.x,r=y.y,a=y.width,s=y.height,i=o=0}else{const y=n,U=y.width/2,G=y.height/2;t=y.x+U,r=y.y+G,a=s=Math.max(0,Math.min(y.radius,Math.min(U,G))),i=U-a,o=G-s}if(!(a>=0&&s>=0&&i>=0&&o>=0))return e;const l=Math.ceil(2.3*Math.sqrt(a+s)),c=l*8+(i?4:0)+(o?4:0);if(c===0)return e;if(l===0)return e[0]=e[6]=t+i,e[1]=e[3]=r+o,e[2]=e[4]=t-i,e[5]=e[7]=r-o,e;let u=0,d=l*4+(i?2:0)+2,b=d,f=c,p=i+a,v=o,h=t+p,B=t-p,M=r+v;if(e[u++]=h,e[u++]=M,e[--d]=M,e[--d]=B,o){const y=r-v;e[b++]=B,e[b++]=y,e[--f]=y,e[--f]=h}for(let y=1;y<l;y++){const U=Math.PI/2*(y/l),G=i+Math.cos(U)*a,R=o+Math.sin(U)*s,_=t+G,x=t-G,m=r+R,P=r-R;e[u++]=_,e[u++]=m,e[--d]=m,e[--d]=x,e[b++]=x,e[b++]=P,e[--f]=P,e[--f]=_}p=i,v=o+s,h=t+p,B=t-p,M=r+v;const S=r-v;return e[u++]=h,e[u++]=M,e[--f]=S,e[--f]=h,i&&(e[u++]=B,e[u++]=M,e[--f]=S,e[--f]=B),e},triangulate(n,e,t,r,i,o){if(n.length===0)return;let a=0,s=0;const l=n.length/4;a+=n[0],s+=n[1],a+=n[l|0],s+=n[(l|0)+1],a+=n[l*2|0],s+=n[(l*2|0)+1],a+=n[l*3|0],s+=n[(l*3|0)+1],a/=4,s/=4;let c=r;e[c*t]=a,e[c*t+1]=s,c++;const u=r;e[c*t]=n[0],e[c*t+1]=n[1],c++;for(let d=2;d<n.length;d+=2)e[c*t]=n[d],e[c*t+1]=n[d+1],i[o++]=c,i[o++]=u,i[o++]=c-1,c++;i[o++]=c-1,i[o++]=u,i[o++]=u+1}},Nr=1e-4,it=1e-4;function Kr(n){const e=n.length;if(e<6)return 1;let t=0;for(let r=0,i=n[e-2],o=n[e-1];r<e;r+=2){const a=n[r],s=n[r+1];t+=(a-i)*(s+o),i=a,o=s}return t<0?-1:1}function ot(n,e,t,r,i,o,a,s){const l=n-t*i,c=e-r*i,u=n+t*o,d=e+r*o;let b,f;a?(b=r,f=-t):(b=-r,f=t);const p=l+b,v=c+f,h=u+b,B=d+f;return s.push(p,v),s.push(h,B),2}function Q(n,e,t,r,i,o,a,s){const l=t-n,c=r-e;let u=Math.atan2(l,c),d=Math.atan2(i-n,o-e);s&&u<d?u+=Math.PI*2:!s&&u>d&&(d+=Math.PI*2);let b=u;const f=d-u,p=Math.abs(f),v=Math.sqrt(l*l+c*c),h=(15*p*Math.sqrt(v)/Math.PI>>0)+1,B=f/h;if(b+=B,s){a.push(n,e),a.push(t,r);for(let M=1,S=b;M<h;M++,S+=B)a.push(n,e),a.push(n+Math.sin(S)*v,e+Math.cos(S)*v);a.push(n,e),a.push(i,o)}else{a.push(t,r),a.push(n,e);for(let M=1,S=b;M<h;M++,S+=B)a.push(n+Math.sin(S)*v,e+Math.cos(S)*v),a.push(n,e);a.push(i,o),a.push(n,e)}return h*2}function Yr(n,e,t,r,i,o,a,s,l){const c=Nr;if(n.length===0)return;const u=e;let d=u.alignment;if(e.alignment!==.5){let D=Kr(n);t&&(D*=-1),d=(d-.5)*D+.5}const b=new ge(n[0],n[1]),f=new ge(n[n.length-2],n[n.length-1]),p=r,v=Math.abs(b.x-f.x)<c&&Math.abs(b.y-f.y)<c;if(p){n=n.slice(),v&&(n.pop(),n.pop(),f.set(n[n.length-2],n[n.length-1]));const D=(b.x+f.x)*.5,K=(f.y+b.y)*.5;n.unshift(D,K),n.push(D,K)}const h=i,B=n.length/2;let M=n.length;const S=h.length/2,y=u.width/2,U=y*y,G=u.miterLimit*u.miterLimit;let R=n[0],_=n[1],x=n[2],m=n[3],P=0,j=0,w=-(_-m),C=R-x,L=0,A=0,V=Math.sqrt(w*w+C*C);w/=V,C/=V,w*=y,C*=y;const Oe=d,T=(1-Oe)*2,k=Oe*2;p||(u.cap==="round"?M+=Q(R-w*(T-k)*.5,_-C*(T-k)*.5,R-w*T,_-C*T,R+w*k,_+C*k,h,!0)+2:u.cap==="square"&&(M+=ot(R,_,w,C,T,k,!0,h))),h.push(R-w*T,_-C*T),h.push(R+w*k,_+C*k);for(let D=1;D<B-1;++D){R=n[(D-1)*2],_=n[(D-1)*2+1],x=n[D*2],m=n[D*2+1],P=n[(D+1)*2],j=n[(D+1)*2+1],w=-(_-m),C=R-x,V=Math.sqrt(w*w+C*C),w/=V,C/=V,w*=y,C*=y,L=-(m-j),A=x-P,V=Math.sqrt(L*L+A*A),L/=V,A/=V,L*=y,A*=y;const K=x-R,ne=_-m,ie=x-P,oe=j-m,We=K*ie+ne*oe,de=ne*ie-oe*K,ae=de<0;if(Math.abs(de)<.001*Math.abs(We)){h.push(x-w*T,m-C*T),h.push(x+w*k,m+C*k),We>=0&&(u.join==="round"?M+=Q(x,m,x-w*T,m-C*T,x-L*T,m-A*T,h,!1)+4:M+=2,h.push(x-L*k,m-A*k),h.push(x+L*T,m+A*T));continue}const $e=(-w+R)*(-C+m)-(-w+x)*(-C+_),je=(-L+P)*(-A+m)-(-L+x)*(-A+j),he=(K*je-ie*$e)/de,fe=(oe*$e-ne*je)/de,we=(he-x)*(he-x)+(fe-m)*(fe-m),Y=x+(he-x)*T,q=m+(fe-m)*T,X=x-(he-x)*k,J=m-(fe-m)*k,Qt=Math.min(K*K+ne*ne,ie*ie+oe*oe),Ne=ae?T:k,Zt=Qt+Ne*Ne*U;we<=Zt?u.join==="bevel"||we/U>G?(ae?(h.push(Y,q),h.push(x+w*k,m+C*k),h.push(Y,q),h.push(x+L*k,m+A*k)):(h.push(x-w*T,m-C*T),h.push(X,J),h.push(x-L*T,m-A*T),h.push(X,J)),M+=2):u.join==="round"?ae?(h.push(Y,q),h.push(x+w*k,m+C*k),M+=Q(x,m,x+w*k,m+C*k,x+L*k,m+A*k,h,!0)+4,h.push(Y,q),h.push(x+L*k,m+A*k)):(h.push(x-w*T,m-C*T),h.push(X,J),M+=Q(x,m,x-w*T,m-C*T,x-L*T,m-A*T,h,!1)+4,h.push(x-L*T,m-A*T),h.push(X,J)):(h.push(Y,q),h.push(X,J)):(h.push(x-w*T,m-C*T),h.push(x+w*k,m+C*k),u.join==="round"?ae?M+=Q(x,m,x+w*k,m+C*k,x+L*k,m+A*k,h,!0)+2:M+=Q(x,m,x-w*T,m-C*T,x-L*T,m-A*T,h,!1)+2:u.join==="miter"&&we/U<=G&&(ae?(h.push(X,J),h.push(X,J)):(h.push(Y,q),h.push(Y,q)),M+=2),h.push(x-L*T,m-A*T),h.push(x+L*k,m+A*k),M+=2)}R=n[(B-2)*2],_=n[(B-2)*2+1],x=n[(B-1)*2],m=n[(B-1)*2+1],w=-(_-m),C=R-x,V=Math.sqrt(w*w+C*C),w/=V,C/=V,w*=y,C*=y,h.push(x-w*T,m-C*T),h.push(x+w*k,m+C*k),p||(u.cap==="round"?M+=Q(x-w*(T-k)*.5,m-C*(T-k)*.5,x-w*T,m-C*T,x+w*k,m+C*k,h,!1)+2:u.cap==="square"&&(M+=ot(x,m,w,C,T,k,!1,h)));const Jt=it*it;for(let D=S;D<M+S-2;++D)R=h[D*2],_=h[D*2+1],x=h[(D+1)*2],m=h[(D+1)*2+1],P=h[(D+2)*2],j=h[(D+2)*2+1],!(Math.abs(R*(m-j)+x*(j-_)+P*(_-m))<Jt)&&s.push(D,D+1,D+2)}function Mt(n,e,t,r,i,o,a){const s=tr(n,e,2);if(!s)return;for(let c=0;c<s.length;c+=3)o[a++]=s[c]+i,o[a++]=s[c+1]+i,o[a++]=s[c+2]+i;let l=i*r;for(let c=0;c<n.length;c+=2)t[l]=n[c],t[l+1]=n[c+1],l+=r}const qr=[],Xr={build(n,e){for(let t=0;t<n.points.length;t++)e[t]=n.points[t];return e},triangulate(n,e,t,r,i,o){Mt(n,qr,e,t,r,i,o)}},Jr={build(n,e){const t=n,r=t.x,i=t.y,o=t.width,a=t.height;return o>=0&&a>=0&&(e[0]=r,e[1]=i,e[2]=r+o,e[3]=i,e[4]=r+o,e[5]=i+a,e[6]=r,e[7]=i+a),e},triangulate(n,e,t,r,i,o){let a=0;r*=t,e[r+a]=n[0],e[r+a+1]=n[1],a+=t,e[r+a]=n[2],e[r+a+1]=n[3],a+=t,e[r+a]=n[6],e[r+a+1]=n[7],a+=t,e[r+a]=n[4],e[r+a+1]=n[5],a+=t;const s=r/t;i[o++]=s,i[o++]=s+1,i[o++]=s+2,i[o++]=s+1,i[o++]=s+3,i[o++]=s+2}},Qr={build(n,e){return e[0]=n.x,e[1]=n.y,e[2]=n.x2,e[3]=n.y2,e[4]=n.x3,e[5]=n.y3,e},triangulate(n,e,t,r,i,o){let a=0;r*=t,e[r+a]=n[0],e[r+a+1]=n[1],a+=t,e[r+a]=n[2],e[r+a+1]=n[3],a+=t,e[r+a]=n[4],e[r+a+1]=n[5];const s=r/t;i[o++]=s,i[o++]=s+1,i[o++]=s+2}};function Zr(n,e,t,r,i,o,a,s=null){let l=0;t*=e,i*=o;const c=s.a,u=s.b,d=s.c,b=s.d,f=s.tx,p=s.ty;for(;l<a;){const v=n[t],h=n[t+1];r[i]=c*v+d*h+f,r[i+1]=u*v+b*h+p,i+=o,t+=e,l++}}function en(n,e,t,r){let i=0;for(e*=t;i<r;)n[e]=0,n[e+1]=0,e+=t,i++}function Ct(n,e,t,r,i){const o=e.a,a=e.b,s=e.c,l=e.d,c=e.tx,u=e.ty;t=t||0,r=r||2,i=i||n.length/r-t;let d=t*r;for(let b=0;b<i;b++){const f=n[d],p=n[d+1];n[d]=o*f+s*p+c,n[d+1]=a*f+l*p+u,d+=r}}const Ve={rectangle:Jr,polygon:Xr,triangle:Qr,circle:Pe,ellipse:Pe,roundedRectangle:Pe},tn=new bt;function rn(n){const i={vertices:[],uvs:[],indices:[]},o=[];for(let a=0;a<n.instructions.length;a++){const s=n.instructions[a];if(s.action==="texture")nn(s.data,o,i);else if(s.action==="fill"||s.action==="stroke"){const l=s.action==="stroke",c=s.data.path.shapePath,u=s.data.style,d=s.data.hole;l&&d&&at(d.shapePath,u,null,!0,o,i),at(c,u,d,l,o,i)}}return o}function nn(n,e,t){const{vertices:r,uvs:i,indices:o}=t,a=o.length,s=r.length/2,l=[],c=Ve.rectangle,u=tn,d=n.image;u.x=n.dx,u.y=n.dy,u.width=n.dw,u.height=n.dh;const b=n.transform;c.build(u,l),b&&Ct(l,b),c.triangulate(l,r,2,s,o,a);const f=d.layout.uvs;i.push(f.x0,f.y0,f.x1,f.y1,f.x3,f.y3,f.x2,f.y2);const p=F.get(He);p.indexOffset=a,p.indexSize=o.length-a,p.vertexOffset=s,p.vertexSize=r.length/2-s,p.color=n.style,p.alpha=n.alpha,p.texture=d,p.geometryData=t,e.push(p)}function at(n,e,t,r,i,o){const{vertices:a,uvs:s,indices:l}=o,c=n.shapePrimitives.length-1;n.shapePrimitives.forEach(({shape:u,transform:d},b)=>{const f=l.length,p=a.length/2,v=[],h=Ve[u.type];if(h.build(u,v),d&&Ct(v,d),r){const y=u.closePath??!0;Yr(v,e,!1,y,a,2,p,l)}else if(t&&c===b){c!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const y=[],U=v.slice();on(t.shapePath).forEach(R=>{y.push(U.length/2),U.push(...R)}),Mt(U,y,a,2,p,l,f)}else h.triangulate(v,a,2,p,l,f);const B=s.length/2,M=e.texture;if(M!==$.WHITE){const y=e.matrix;d&&y.append(d.clone().invert()),Zr(a,2,p,s,B,2,a.length/2-p,y)}else en(s,B,2,a.length/2-p);const S=F.get(He);S.indexOffset=f,S.indexSize=l.length-f,S.vertexOffset=p,S.vertexSize=a.length/2-p,S.color=e.color,S.alpha=e.alpha,S.texture=M,S.geometryData=o,i.push(S)})}function on(n){if(!n)return[];const e=n.shapePrimitives,t=[];for(let r=0;r<e.length;r++){const i=e[r].shape,o=[];Ve[i.type].build(i,o),t.push(o)}return t}class an{}class sn{constructor(){this.geometry=new yr,this.batches=[]}init(){this.batches.length=0,this.geometry.reset()}}class kt{constructor(){this.activeBatchers=[],this.gpuContextHash={},this.graphicsDataContextHash={},this._needsContextNeedsRebuild=[]}prerender(){this.returnActiveBatchers()}returnActiveBatchers(){for(let e=0;e<this.activeBatchers.length;e++)F.return(this.activeBatchers[e]);this.activeBatchers.length=0}getContextRenderData(e){return this.graphicsDataContextHash[e.uid]||this.initContextRenderData(e)}initContextRenderData(e){const t=F.get(sn),r=this.gpuContextHash[e.uid].batches;let i=0,o=0;r.forEach(c=>{c.applyTransform=!1,i+=c.geometryData.vertices.length,o+=c.geometryData.indices.length});const a=F.get(St);this.activeBatchers.push(a),a.ensureAttributeBuffer(i),a.ensureIndexBuffer(o),a.begin();for(let c=0;c<r.length;c++){const u=r[c];a.add(u)}a.finish();const s=t.geometry;s.indexBuffer.data=a.indexBuffer,s.buffers[0].data=a.attributeBuffer.float32View;const l=a.batches;for(let c=0;c<l.length;c++){const u=l[c];u.textures.bindGroup=kr(u.textures.textures)}return this.graphicsDataContextHash[e.uid]=t,t.batches=l,t}updateGpuContext(e){let t=this.gpuContextHash[e.uid]||this.initContext(e);if(e.dirty){t?this.cleanGraphicsContextData(e):t=this.initContext(e);const r=rn(e);let i=0;const o=e.batchMode;let a=!0;if(o==="auto"){for(let s=0;s<r.length;s++)if(i+=r[s].vertexSize,i>100){a=!1;break}}else o==="no-batch"&&(a=!1);t=this.gpuContextHash[e.uid]={isBatchable:a,batches:r},e.dirty=!1}return t}getGpuContext(e){return this.gpuContextHash[e.uid]||this.initContext(e)}initContext(e){const t=new an;return this.gpuContextHash[e.uid]=t,e.on("update",this.onGraphicsContextUpdate,this),e.on("destroy",this.onGraphicsContextDestroy,this),this.gpuContextHash[e.uid]}onGraphicsContextUpdate(e){this._needsContextNeedsRebuild.push(e)}onGraphicsContextDestroy(e){this.cleanGraphicsContextData(e),this.gpuContextHash[e.uid]=null}cleanGraphicsContextData(e){const t=this.gpuContextHash[e.uid];t.isBatchable||this.graphicsDataContextHash[e.uid]&&(F.return(this.getContextRenderData(e)),this.graphicsDataContextHash[e.uid]=null),t.batches&&t.batches.forEach(r=>{F.return(r)})}destroy(){}}kt.extension={type:[g.WebGLRendererSystem,g.WebGPURendererSystem,g.CanvasRendererSystem],name:"graphicsContext"};class Pt{constructor(e,t){this.state=Fe.for2d(),this.renderableBatchesHash={},this.renderer=e,this.adaptor=t,this.adaptor.init()}validateRenderable(e){const t=e.view.context,r=!!this.renderableBatchesHash[e.uid],i=this.renderer.graphicsContext.updateGpuContext(t);return!!(i.isBatchable||r!==i.isBatchable)}addRenderable(e,t){const r=this.renderer.graphicsContext.updateGpuContext(e.view.context);e.view.didUpdate&&(e.view.didUpdate=!1,this.rebuild(e)),r.isBatchable?this.addToBatcher(e,t):(this.renderer.renderPipes.batch.break(t),t.add({type:"graphics",renderable:e}))}updateRenderable(e){const t=this.renderableBatchesHash[e.uid];if(t)for(let r=0;r<t.length;r++){const i=t[r];i.batcher.updateElement(i)}}execute({renderable:e}){e.isRenderable&&this.adaptor.execute(this,e)}rebuild(e){const t=!!this.renderableBatchesHash[e.uid],r=this.renderer.graphicsContext.updateGpuContext(e.view.context);t&&this.removeBatchForRenderable(e.uid),r.isBatchable&&this.initBatchesForRenderable(e),e.view.batched=r.isBatchable}addToBatcher(e,t){const r=this.renderer.renderPipes.batch,i=this.getBatchesForRenderable(e);for(let o=0;o<i.length;o++){const a=i[o];r.addToBatch(a,t)}}getBatchesForRenderable(e){return this.renderableBatchesHash[e.uid]||this.initBatchesForRenderable(e)}initBatchesForRenderable(e){const t=e.view.context,i=this.renderer.graphicsContext.getGpuContext(t).batches.map(o=>{const a=F.get(He);return o.copyTo(a),a.renderable=e,a});return this.renderableBatchesHash[e.uid]=i,e.on("destroyed",()=>{this.destroyRenderable(e)}),i}destroyRenderable(e){this.removeBatchForRenderable(e.uid)}removeBatchForRenderable(e){this.renderableBatchesHash[e].forEach(t=>{F.return(t)}),this.renderableBatchesHash[e]=null}destroy(){this.renderer=null,this.shader.destroy(),this.shader=null,this.adaptor.destroy(),this.adaptor=null,this.state=null;for(const e in this.renderableBatchesHash)this.removeBatchForRenderable(e);this.renderableBatchesHash=null}}Pt.extension={type:[g.WebGLRendererPipes,g.WebGPURendererPipes,g.CanvasRendererPipes],name:"graphics"};function ln(n,e){const t=n.root,r=n.instructionSet;r.reset(),e.batch.buildStart(r),e.blendMode.buildStart(),e.colorMask.buildStart();const i=n.proxyRenderable;i&&(e.blendMode.setBlendMode(i,i.layerBlendMode,r),e[i.view.type].addRenderable(i,r));const o=t.children,a=o.length;for(let s=0;s<a;s++)ue(o[s],r,e);e.batch.buildEnd(r),e.blendMode.buildEnd(r)}function ue(n,e,t){n.layerVisibleRenderable<3||!n.includeInBuild||(n.isSimple?cn(n,e,t):un(n,e,t))}function cn(n,e,t){const r=n.view;if(r&&(t.blendMode.setBlendMode(n,n.layerBlendMode,e),n.didViewUpdate=!1,t[r.type].addRenderable(n,e)),!n.isLayerRoot){const i=n.children,o=i.length;for(let a=0;a<o;a++)ue(i[a],e,t)}}function un(n,e,t){for(let r=0;r<n.effects.length;r++){const i=n.effects[r];t[i.pipe].push(i,n,e)}if(n.isLayerRoot)t.layer.addLayerGroup(n.layerGroup,e);else{const r=n.view;r&&(t.blendMode.setBlendMode(n,n.layerBlendMode,e),n.didViewUpdate=!1,t[r.type].addRenderable(n,e));const i=n.children;if(i.length)for(let o=0;o<i.length;o++)ue(i[o],e,t)}for(let r=n.effects.length-1;r>=0;r--){const i=n.effects[r];t[i.pipe].pop(i,n,e)}}const dn=new Ae;class hn extends pt{constructor(){super({filters:[new Er({sprite:new rr($.EMPTY)})]})}get sprite(){return this.filters[0].sprite}set sprite(e){this.filters[0].sprite=e}}class Rt{constructor(e){this.activeMaskStage=[],this.renderer=e}push(e,t,r){const i=this.renderer;if(i.renderPipes.batch.break(r),r.add({type:"alphaMask",action:"pushMaskBegin",mask:e,canBundle:!1,maskedContainer:t}),e.renderMaskToTexture){const o=e.mask;o.includeInBuild=!0,ue(o,r,i.renderPipes),o.includeInBuild=!1}i.renderPipes.batch.break(r),r.add({type:"alphaMask",action:"pushMaskEnd",mask:e,maskedContainer:t,canBundle:!1})}pop(e,t,r){this.renderer.renderPipes.batch.break(r),r.add({type:"alphaMask",action:"popMaskEnd",mask:e,canBundle:!1})}execute(e){const t=this.renderer,r=e.mask.renderMaskToTexture;if(e.action==="pushMaskBegin"){const i=F.get(hn);if(r){e.mask.mask.measurable=!0;const o=ft(e.mask.mask,!0,dn);e.mask.mask.measurable=!1,o.ceil();const a=O.getOptimalTexture(o.width,o.height,1,!1),s=t.renderTarget.push(a,!0);t.globalUniforms.push({projectionMatrix:s.projectionMatrix,offset:o,worldColor:4294967295});const l=i.sprite;l.texture=a,l.worldTransform.tx=o.minX,l.worldTransform.ty=o.minY,this.activeMaskStage.push({filterEffect:i,maskedContainer:e.maskedContainer,filterTexture:a})}else i.sprite=e.mask.mask,this.activeMaskStage.push({filterEffect:i,maskedContainer:e.maskedContainer})}else if(e.action==="pushMaskEnd"){const i=this.activeMaskStage[this.activeMaskStage.length-1];r&&(t.renderTarget.pop(),t.globalUniforms.pop()),t.filter.push({type:"filter",action:"pushFilter",container:i.maskedContainer,filterEffect:i.filterEffect,canBundle:!1})}else if(e.action==="popMaskEnd"){t.filter.pop();const i=this.activeMaskStage.pop();r&&O.returnTexture(i.filterTexture),F.return(i.filterEffect)}}destroy(){this.renderer=null,this.activeMaskStage=null}}Rt.extension={type:[g.WebGLRendererPipes,g.WebGPURendererPipes,g.CanvasRendererPipes],name:"alphaMask"};class Ut{constructor(e){this.colorStack=[],this.colorStackIndex=0,this.currentColor=0,this.renderer=e}buildStart(){this.colorStack[0]=15,this.colorStackIndex=1,this.currentColor=15}push(e,t,r){this.renderer.renderPipes.batch.break(r);const o=this.colorStack;o[this.colorStackIndex]=o[this.colorStackIndex-1]&e.mask;const a=this.colorStack[this.colorStackIndex];a!==this.currentColor&&(this.currentColor=a,r.add({type:"colorMask",colorMask:a,canBundle:!1})),this.colorStackIndex++}pop(e,t,r){this.renderer.renderPipes.batch.break(r);const o=this.colorStack;this.colorStackIndex--;const a=o[this.colorStackIndex-1];a!==this.currentColor&&(this.currentColor=a,r.add({type:"colorMask",colorMask:a,canBundle:!1}))}execute(e){this.renderer.colorMask.setMask(e.colorMask)}destroy(){this.colorStack=null}}Ut.extension={type:[g.WebGLRendererPipes,g.WebGPURendererPipes,g.CanvasRendererPipes],name:"colorMask"};var E=(n=>(n[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=3]="RENDERING_MASK_REMOVE",n[n.NONE=4]="NONE",n))(E||{});class Dt{constructor(e){this.maskStackHash={},this.maskHash=new WeakMap,this.renderer=e}push(e,t,r){const i=this.renderer;i.renderPipes.batch.break(r),r.add({type:"stencilMask",action:"pushMaskBegin",mask:e,canBundle:!1});const o=e.mask;o.includeInBuild=!0,this.maskHash.has(e)||this.maskHash.set(e,{instructionsStart:0,instructionsLength:0});const a=this.maskHash.get(e);a.instructionsStart=r.instructionSize,ue(o,r,i.renderPipes),o.includeInBuild=!1,i.renderPipes.batch.break(r),r.add({type:"stencilMask",action:"pushMaskEnd",mask:e,canBundle:!1});const s=r.instructionSize-a.instructionsStart-1;a.instructionsLength=s;const l=i.renderTarget.renderTarget.uid;this.maskStackHash[l]||(this.maskStackHash[l]=0),this.maskStackHash[l]++}pop(e,t,r){const i=this.renderer,o=i.renderTarget.renderTarget.uid;this.maskStackHash[o]--,i.renderPipes.batch.break(r),r.add({type:"stencilMask",action:"popMaskBegin",canBundle:!1});const a=this.maskHash.get(e);if(this.maskStackHash[o])for(let s=0;s<a.instructionsLength;s++)r.instructions[r.instructionSize++]=r.instructions[a.instructionsStart++];r.add({type:"stencilMask",action:"popMaskEnd",canBundle:!1})}execute(e){const t=this.renderer,r=t.renderTarget.renderTarget.uid;let i=this.maskStackHash[r];e.action==="pushMaskBegin"?(i++,t.stencil.setStencilMode(E.RENDERING_MASK_ADD,i),t.colorMask.setMask(0)):e.action==="pushMaskEnd"?(t.stencil.setStencilMode(E.MASK_ACTIVE,i),t.colorMask.setMask(15)):e.action==="popMaskBegin"?(i--,i!==0&&(t.stencil.setStencilMode(E.RENDERING_MASK_REMOVE,i),t.colorMask.setMask(0))):e.action==="popMaskEnd"&&(i===0?t.stencil.setStencilMode(E.DISABLED,i):t.stencil.setStencilMode(E.MASK_ACTIVE,i),t.colorMask.setMask(15)),this.maskStackHash[r]=i}destroy(){this.renderer=null,this.maskStackHash=null,this.maskHash=null}}Dt.extension={type:[g.WebGLRendererPipes,g.WebGPURendererPipes,g.CanvasRendererPipes],name:"stencilMask"};class fn{constructor(){this.batcher=null,this.batch=null}get blendMode(){return this.renderable.layerBlendMode}reset(){this.renderable=null,this.texture=null,this.batcher=null,this.batch=null}packIndex(e,t,r){const i=this.renderable.view.geometry.indices;for(let o=0;o<i.length;o++)e[t++]=i[o]+r}packAttributes(e,t,r,i){const o=this.renderable,a=this.renderable.view.geometry,s=o.layerTransform,l=s.a,c=s.b,u=s.c,d=s.d,b=s.tx,f=s.ty,p=a.positions,v=a.uvs,h=o.layerColor;for(let B=0;B<p.length;B+=2){const M=p[B],S=p[B+1];e[r++]=l*M+u*S+b,e[r++]=c*M+d*S+f,e[r++]=v[B],e[r++]=v[B+1],t[r++]=h,e[r++]=i}}get vertexSize(){return this.renderable.view.geometry.positions.length/2}get indexSize(){return this.renderable.view.geometry.indices.length}}var bn=`in vec2 vTextureCoord;
in vec4 vColor;

uniform sampler2D uTexture;

out vec4 outColor;

void main(void){
   outColor = texture(uTexture, vTextureCoord) * vColor;
}`,pn=`
in vec2 aPosition;
in vec2 aUV;

uniform globalUniforms {
  mat3 projectionMatrix;
  mat3 worldTransformMatrix;
  float worldAlpha;
};

uniform mat3 transformMatrix;
uniform vec4 color;

out vec2 vTextureCoord;
out vec4 vColor;

void main(void){
    gl_Position = vec4((projectionMatrix * worldTransformMatrix * transformMatrix * vec3(aPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aUV;
    
    vColor = vec4(color.rgb * color.a, color.a) * worldAlpha;
}`,st=`struct GlobalUniforms {
  projectionMatrix:mat3x3<f32>,
  worldTransformMatrix:mat3x3<f32>,
  worldAlpha: f32
}

struct LocalUniforms {
  transformMatrix:mat3x3<f32>,
  color:vec4<f32>
}


@group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
@group(1) @binding(0) var<uniform> localUniforms: LocalUniforms;

@group(2) @binding(0) var uTexture: texture_2d<f32>;
@group(2) @binding(1) var uSampler: sampler;



struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) color : vec4<f32>,
  };

  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
  @location(1) aUV : vec2<f32>,
) -> VSOutput {

    var  mvpMatrix = globalUniforms.projectionMatrix * globalUniforms.worldTransformMatrix * localUniforms.transformMatrix;

    var  colorOut = localUniforms.color;

    colorOut.r *= colorOut.a;
    colorOut.g *= colorOut.a;
    colorOut.b *= colorOut.a;
    
  return VSOutput(
    vec4<f32>((mvpMatrix * vec3<f32>(aPosition, 1.0)).xy, 0.0, 1.0),
    aUV,
    colorOut,
  );
};


@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) color:vec4<f32>,
) -> @location(0) vec4<f32> {

  return textureSample(uTexture, uSampler, uv) * color;
  
}`;class gn extends gt{constructor(e){const t=le.from({vertex:pn,fragment:bn,name:"mesh-default"}),r=ce.from({vertex:{source:st,entryPoint:"mainVertex"},fragment:{source:st,entryPoint:"mainFragment"}});super({glProgram:t,gpuProgram:r,resources:{uTexture:e.texture.source,uSampler:e.texture.style}})}get texture(){return this._texture}set texture(e){this._texture!==e&&(this._texture=e,this.resources.uTexture=e.source,this.resources.uSampler=e.style)}}class Lt{constructor(e,t){this.localUniforms=new N({transformMatrix:{value:new H,type:"mat3x3<f32>"},color:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"}}),this.localUniformsBindGroup=new me({0:this.localUniforms}),this.meshShader=new gn({texture:$.EMPTY}),this.state=Fe.for2d(),this.renderableHash={},this.gpuBatchableMeshHash={},this.renderer=e,this.adaptor=t}validateRenderable(e){const t=this.getRenderableData(e),r=t.batched,i=e.view.batched;if(t.batched=i,r!==i)return!0;if(i){const o=e.view._geometry;if(o.indices.length!==t.indexSize||o.positions.length!==t.vertexSize)return t.indexSize=o.indices.length,t.vertexSize=o.positions.length,!0;const a=this.getBatchableMesh(e),s=e.view.texture;if(a.texture._source!==s._source&&a.texture._source!==s._source)return a.batcher.checkAndUpdateTexture(a,s)}return!1}addRenderable(e,t){const r=this.renderer.renderPipes.batch,{batched:i}=this.getRenderableData(e);if(i){const o=this.getBatchableMesh(e);o.texture=e.view._texture,r.addToBatch(o,t)}else r.break(t),t.add({type:"mesh",renderable:e})}updateRenderable(e){if(e.view.batched){const t=this.gpuBatchableMeshHash[e.uid];t.texture=e.view._texture,t.batcher.updateElement(t)}}destroyRenderable(e){this.renderableHash[e.uid]=null;const t=this.gpuBatchableMeshHash[e.uid];F.return(t),this.gpuBatchableMeshHash[e.uid]=null}execute({renderable:e}){e.isRenderable&&this.adaptor.execute(this,e)}getRenderableData(e){return this.renderableHash[e.uid]||this.initRenderableData(e)}initRenderableData(e){const t=e.view;return this.renderableHash[e.uid]={batched:t.batched,indexSize:t._geometry.indices.length,vertexSize:t._geometry.positions.length},e.on("destroyed",()=>{this.destroyRenderable(e)}),this.renderableHash[e.uid]}getBatchableMesh(e){return this.gpuBatchableMeshHash[e.uid]||this.initBatchableMesh(e)}initBatchableMesh(e){const t=F.get(fn);return t.renderable=e,this.gpuBatchableMeshHash[e.uid]=t,t.renderable=e,t}destroy(){for(const e in this.gpuBatchableMeshHash)this.gpuBatchableMeshHash[e]&&F.return(this.gpuBatchableMeshHash[e]);this.gpuBatchableMeshHash=null,this.renderableHash=null,this.localUniforms=null,this.localUniformsBindGroup=null,this.meshShader.destroy(),this.meshShader=null,this.adaptor=null,this.renderer=null,this.state=null}}Lt.extension={type:[g.WebGLRendererPipes,g.WebGPURendererPipes,g.CanvasRendererPipes],name:"mesh"};function mn(n,e,t,r,i,o){const a=o?1:-1;return n.identity(),n.a=1/r*2,n.d=a*(1/i*2),n.tx=-1-e*n.a,n.ty=-a-t*n.d,n}let xn=0;const _t=class{constructor(n={}){if(this.uid=xn++,this.width=0,this.height=0,this.resolution=1,this.colorTextures=[],this.clearColor=0,this.dirtyId=0,this.isRoot=!1,this._projectionMatrix=new H,n={..._t.defaultDescriptor,...n},this.width=n.width,this.height=n.height,this.resolution=n.resolution,this.stencil=n.stencil,this._viewport=new bt(0,0,this.width,this.height),typeof n.colorTextures=="number")for(let e=0;e<n.colorTextures;e++)this.colorTextures.push(new $({source:new be({width:this.width,height:this.height,resolution:n.resolution,antialias:n.antialias})}));else{this.colorTextures=[...n.colorTextures];const e=this.colorTexture.source;this.resize(e.width,e.height,e._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),n.depthTexture&&(this.depthTexture=new $({source:new be({width:this.width,height:this.height,resolution:this.resolution,format:"stencil8"})}))}get pixelWidth(){return this.width*this.resolution}get pixelHeight(){return this.height*this.resolution}get colorTexture(){return this.colorTextures[0]}get projectionMatrix(){const n=this.colorTexture;return mn(this._projectionMatrix,0,0,n.frameWidth,n.frameHeight,!this.isRoot),this._projectionMatrix}get viewport(){const n=this.colorTexture,e=n.source,t=e.pixelWidth,r=e.pixelHeight,i=this._viewport,o=n.layout.frame;return i.x=o.x*t|0,i.y=o.y*r|0,i.width=o.width*t|0,i.height=o.height*r|0,i}onSourceResize(n){this.resize(n.width,n.height,n._resolution,!0)}resize(n,e,t=this.resolution,r=!1){this.width=n,this.height=e,this.resolution=t,this.dirtyId++,this.colorTextures.forEach((i,o)=>{r&&o===0||i.source.resize(n,e,t)}),this.depthTexture&&this.depthTexture.source.resize(n,e,t)}destroy(){throw new Error("Method not implemented.")}};let vn=_t;vn.defaultDescriptor={width:0,height:0,resolution:1,colorTextures:1,stencil:!0,antialias:!1};class I{constructor(e){this.items=[],this._name=e,this._aliasCount=0}emit(e,t,r,i,o,a,s,l){const{name:c,items:u}=this;this._aliasCount++;for(let d=0,b=u.length;d<b;d++)u[d][c](e,t,r,i,o,a,s,l);return u===this.items&&this._aliasCount--,this}ensureNonAliasedItems(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))}add(e){return e[this._name]&&(this.ensureNonAliasedItems(),this.remove(e),this.items.push(e)),this}remove(e){const t=this.items.indexOf(e);return t!==-1&&(this.ensureNonAliasedItems(),this.items.splice(t,1)),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.ensureNonAliasedItems(),this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}Object.defineProperties(I.prototype,{dispatch:{value:I.prototype.emit},run:{value:I.prototype.emit}});const re=[];re[E.NONE]=void 0;re[E.DISABLED]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilWriteMask:0,stencilReadMask:0,stencilBack:{compare:"always",passOp:"keep"}};re[E.RENDERING_MASK_ADD]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilBack:{compare:"always",passOp:"increment-clamp"}};re[E.RENDERING_MASK_ADD]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilBack:{compare:"always",passOp:"increment-clamp"}};re[E.RENDERING_MASK_REMOVE]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilBack:{compare:"always",passOp:"decrement-clamp"}};re[E.MASK_ACTIVE]={format:"stencil8",depthCompare:"always",depthWriteEnabled:!1,stencilWriteMask:0,stencilBack:{compare:"equal",passOp:"keep"}};class fi extends mt{constructor({buffer:e,offset:t,size:r}){super(),this.uid=Te(),this.resourceType="bufferResource",this.resourceId=Te(),this.bufferResource=!0,this.buffer=e,this.offset=t,this.size=r,this.buffer.on("change",this.onBufferChange,this)}onBufferChange(){this.resourceId=Te(),this.emit("change",this)}destroy(e=!1){e&&this.buffer.destroy(),this.buffer=null}}let lt=!1;const ct="8.0.0-alpha.0";function bi(n){if(!lt){if(xe.ADAPTER.getNavigator().userAgent.toLowerCase().indexOf("chrome")>-1){const e=[`%c  %c  %c  %c  %c PixiJS %c v${ct} (${n}) http://www.pixijs.com/

`,"background: #E72264; padding:5px 0;","background: #6CA2EA; padding:5px 0;","background: #B5D33D; padding:5px 0;","background: #FED23F; padding:5px 0;","color: #FFFFFF; background: #E72264; padding:5px 0;","color: #E72264; background: #FFFFFF; padding:5px 0;"];globalThis.console.log(...e)}else globalThis.console&&globalThis.console.log(`PixiJS ${ct} - ${n} - http://www.pixijs.com/`);lt=!0}}class Le extends mt{constructor({original:e,view:t}){super(),this.uid=nr(),this.didViewUpdate=!1,this.view=t,e&&this.init(e)}init(e){this.original=e,this.layerTransform=e.layerTransform}get layerColor(){return this.original.layerColor}get layerBlendMode(){return this.original.layerBlendMode}get layerVisibleRenderable(){return this.original.layerVisibleRenderable}get isRenderable(){return this.original.isRenderable}}class Ft extends ir{constructor(){super({positions:new Float32Array([0,0,1,0,1,1,0,1]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])})}}var yn=`precision lowp float;

in vec2 vTextureCoord;
in vec4 vColor;

out vec4 outColor;

uniform sampler2D uTexture;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uTexture, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    outColor = texSample * vColor;
}
`,Sn=`precision lowp float;

in vec2 aPosition;
in vec2 aUV;

uniform globalUniforms {
  mat3 projectionMatrix;
  mat3 worldTransformMatrix;
  float worldAlpha;
};


uniform mat3 transformMatrix;
uniform vec4 color;
uniform mat3 uTextureTransform;
uniform vec4 uSizeAnchor;

out vec2 vTextureCoord;
out vec4 vColor;

void main(void)
{
    vec2 modifiedPosition = (aPosition - uSizeAnchor.zw) * uSizeAnchor.xy;
  
    gl_Position = vec4((projectionMatrix * worldTransformMatrix * transformMatrix * vec3(modifiedPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureTransform * vec3(aUV, 1.0)).xy;

    vColor = color * worldAlpha;
}
`,ut=`struct GlobalUniforms {
projectionMatrix:mat3x3<f32>,
  worldTransformMatrix:mat3x3<f32>,
  worldAlpha: f32
};

struct LocalUniforms {
  transformMatrix:mat3x3<f32>,
  color:vec4<f32>,
};

struct TilingUniforms {
  uMapCoord:mat3x3<f32>,
  uClampFrame:vec4<f32>,
  uClampOffset:vec2<f32>,
  uTextureTransform:mat3x3<f32>,
  uSizeAnchor:vec4<f32>
};

@group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
@group(1) @binding(0) var<uniform> localUniforms: LocalUniforms;

@group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
@group(2) @binding(1) var uTexture: texture_2d<f32>;
@group(2) @binding(2) var uSampler: sampler;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) color : vec4<f32>,
  };

  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
  @location(1) aUV : vec2<f32>,
) -> VSOutput {

    var modifiedPosition = (aPosition - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
  
    var  mvpMatrix = globalUniforms.projectionMatrix * globalUniforms.worldTransformMatrix * localUniforms.transformMatrix;

    var  colorOut = localUniforms.color;

    colorOut.r *= colorOut.a;
    colorOut.g *= colorOut.a;
    colorOut.b *= colorOut.a;
    
  return VSOutput(
    vec4<f32>((mvpMatrix * vec3<f32>(modifiedPosition, 1.0)).xy, 0.0, 1.0),
    (tilingUniforms.uTextureTransform * vec3(aUV, 1.0)).xy,
    colorOut,
  );
};


@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) color:vec4<f32>,
) -> @location(0) vec4<f32> {

    var coord = uv + ceil(tilingUniforms.uClampOffset - uv);
    coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
    var unclamped = coord;
    coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

    var bias = 0.;

    if(unclamped.x == coord.x && unclamped.y == coord.y)
    {
      bias = -32.;
    } 
    

    var finalColor = textureSampleBias(uTexture, uSampler, coord, bias);
    
   return finalColor * color;

}`;class wn extends gt{constructor(e){const t=le.from({vertex:Sn,fragment:yn,name:"tiling-sprite"}),r=ce.from({vertex:{source:ut,entryPoint:"mainVertex"},fragment:{source:ut,entryPoint:"mainFragment"}}),i=new N({uMapCoord:{value:new H,type:"mat3x3<f32>"},uClampFrame:{value:new Float32Array([0,0,1,1]),type:"vec4<f32>"},uClampOffset:{value:new Float32Array([0,0]),type:"vec2<f32>"},uTextureTransform:{value:new H,type:"mat3x3<f32>"},uSizeAnchor:{value:new Float32Array([100,200,.5,.5]),type:"vec4<f32>"}});super({glProgram:t,gpuProgram:r,resources:{tilingUniforms:i,uTexture:e.texture.source,uSampler:e.texture.style}})}get texture(){return this._texture}set texture(e){this._texture!==e&&(this._texture=e,this.resources.uTexture=e.source,this.resources.uSampler=e.style)}}const Tn=new Ft;class zt{constructor(e){this.renderableHash={},this.gpuBatchedTilingSprite={},this.gpuTilingSprite={},this.renderer=e}validateRenderable(e){const t=e.view.texture.textureMatrix;let r=!1;const i=this.getRenderableData(e);return i.batched!==t.isSimple&&(i.batched=t.isSimple,r=!0),r}addRenderable(e,t){e.view.didUpdate&&(e.view.didUpdate=!1,this.rebuild(e));const{batched:r}=this.getRenderableData(e);if(r){const i=this.getBatchedTilingSprite(e);this.renderer.renderPipes.mesh.addRenderable(i,t)}else{const i=this.getGpuTilingSprite(e);this.renderer.renderPipes.mesh.addRenderable(i.meshRenderable,t)}}updateRenderable(e){e.view.didUpdate&&(e.view.didUpdate=!1,this.rebuild(e));const{batched:t}=this.getRenderableData(e);if(t){const r=this.getBatchedTilingSprite(e);this.renderer.renderPipes.mesh.updateRenderable(r)}else{const r=this.getGpuTilingSprite(e);this.renderer.renderPipes.mesh.updateRenderable(r.meshRenderable)}}destroyRenderable(e){this.renderableHash[e.uid]=null,this.gpuTilingSprite[e.uid]=null,this.gpuBatchedTilingSprite[e.uid]=null}getRenderableData(e){return this.renderableHash[e.uid]||this.initRenderableData(e)}initRenderableData(e){const t={batched:!0};return this.renderableHash[e.uid]=t,this.validateRenderable(e),e.on("destroyed",()=>{this.destroyRenderable(e)}),t}rebuild(e){const t=this.getRenderableData(e),r=e.view,i=r.texture.textureMatrix;if(t.batched){const o=this.getBatchedTilingSprite(e);o.view.texture=r.texture,r.texture.style.addressMode="repeat",r.texture.style.update(),this.updateBatchPositions(e),this.updateBatchUvs(e)}else{const o=this.getGpuTilingSprite(e),{meshRenderable:a}=o,s=a.view;s.shader.texture=r.texture;const l=s.shader.resources.tilingUniforms,c=r.width,u=r.height,d=r.texture.width,b=r.texture.height,f=r.tileTransform.matrix,p=l.uniforms.uTextureTransform;p.set(f.a*d/c,f.b*d/u,f.c*b/c,f.d*b/u,f.tx/c,f.ty/u),p.invert(),l.uniforms.uMapCoord=i.mapCoord,l.uniforms.uClampFrame=i.uClampFrame,l.uniforms.uClampOffset=i.uClampOffset,l.uniforms.uTextureTransform=p,l.uniforms.uSizeAnchor[0]=c,l.uniforms.uSizeAnchor[1]=u,l.uniforms.uSizeAnchor[2]=e.view.anchor.x,l.uniforms.uSizeAnchor[3]=e.view.anchor.y,l.update()}}getGpuTilingSprite(e){return this.gpuTilingSprite[e.uid]||this.initGpuTilingSprite(e)}initGpuTilingSprite(e){const t=e.view;t.texture.style.addressMode="repeat",t.texture.style.update();const r=new Ke({geometry:Tn,shader:new wn({texture:t.texture})}),i=new Le({original:e,view:r}),o=new H,a={meshRenderable:i,textureMatrix:o};return this.gpuTilingSprite[e.uid]=a,a}getBatchedTilingSprite(e){return this.gpuBatchedTilingSprite[e.uid]||this.initBatchedTilingSprite(e)}initBatchedTilingSprite(e){const t=new Ke({geometry:new Ft,texture:e.view.texture}),r=new Le({original:e,view:t});return this.gpuBatchedTilingSprite[e.uid]=r,r}updateBatchPositions(e){const t=this.getBatchedTilingSprite(e),r=e.view,o=t.view.geometry.getBuffer("aPosition").data,a=r.anchor.x,s=r.anchor.y;o[0]=-a*r.width,o[1]=-s*r.height,o[2]=(1-a)*r.width,o[3]=-s*r.height,o[4]=(1-a)*r.width,o[5]=(1-s)*r.height,o[6]=-a*r.width,o[7]=(1-s)*r.height}updateBatchUvs(e){const t=e.view,r=t.texture.frameWidth,i=t.texture.frameHeight,s=this.getBatchedTilingSprite(e).view.geometry.getBuffer("aUV").data;let l=0,c=0;t.applyAnchorToTexture&&(l=t.anchor.x,c=t.anchor.y),s[0]=s[6]=-l,s[2]=s[4]=1-l,s[1]=s[3]=-c,s[5]=s[7]=1-c;const u=H.shared;u.copyFrom(t.tileTransform.matrix),u.tx/=t.width,u.ty/=t.height,u.invert(),u.scale(t.width/r,t.height/i),Bn(s,2,0,u)}destroy(){this.renderableHash=null,this.gpuTilingSprite=null,this.gpuBatchedTilingSprite=null,this.renderer=null}}zt.extension={type:[g.WebGLRendererPipes,g.WebGPURendererPipes,g.CanvasRendererPipes],name:"tilingSprite"};function Bn(n,e,t,r){let i=0;const o=n.length/(e||2),a=r.a,s=r.b,l=r.c,c=r.d,u=r.tx,d=r.ty;for(t*=e;i<o;){const b=n[t],f=n[t+1];n[t]=a*b+l*f+u,n[t+1]=s*b+c*f+d,t+=e,i++}}function At(n,e){const t=n.instructionSet,r=t.instructions;for(let i=0;i<t.instructionSize;i++){const o=r[i];e[o.type].execute(o)}}class Gt{constructor(e){this.renderer=e}addLayerGroup(e,t){this.renderer.renderPipes.batch.break(t),t.add(e)}execute(e){e.isRenderable&&(this.renderer.globalUniforms.push({projectionMatrix:this.renderer.renderTarget.renderTarget.projectionMatrix,worldTransformMatrix:e.worldTransform,worldColor:e.worldColor}),At(e,this.renderer.renderPipes),this.renderer.globalUniforms.pop())}destroy(){this.renderer=null}}Gt.extension={type:[g.WebGLRendererPipes,g.WebGPURendererPipes,g.CanvasRendererPipes],name:"layer"};function It(n,e=[]){e.push(n);for(let t=0;t<n.layerGroupChildren.length;t++)It(n.layerGroupChildren[t],e);return e}const Mn=new or;function Et(n,e=!1){Cn(n);const t=n.childrenToUpdate,r=n.updateTick;n.updateTick++;for(const i in t){const o=t[i],a=o.list,s=o.index;for(let l=0;l<s;l++)Ht(a[l],r,0);o.index=0}if(e)for(let i=0;i<n.layerGroupChildren.length;i++)Et(n.layerGroupChildren[i],e)}function Cn(n){n.layerGroupParent?(n.worldTransform.appendFrom(n.root.layerTransform,n.layerGroupParent.worldTransform),n.worldColor=Ee(n.root.layerColor,n.layerGroupParent.worldColor)):(n.worldTransform.copyFrom(n.root.layerTransform),n.worldColor=n.root.localColor)}function Ht(n,e,t){if(e===n.updateTick)return;n.updateTick=e,n.didChange=!1;const r=n.localTransform;ar(r,n);const i=n.parent;if(i&&!i.isLayerRoot?(t=t|n.updateFlags,n.layerTransform.appendFrom(r,i.layerTransform),t&&dt(n,i,t)):(t=n.updateFlags,n.layerTransform.copyFrom(r),t&&dt(n,Mn,t)),!n.isLayerRoot){const o=n.children,a=o.length;for(let l=0;l<a;l++)Ht(o[l],e,t);const s=n.layerGroup;n.view&&!s.structureDidChange&&s.updateRenderable(n)}}function dt(n,e,t){t&sr&&(n.layerColor=Ee(n.localColor,e.layerColor)),t&lr&&(n.layerBlendMode=n.localBlendMode==="inherit"?e.layerBlendMode:n.localBlendMode),t&cr&&(n.layerVisibleRenderable=n.localVisibleRenderable&e.layerVisibleRenderable),n.updateFlags=0}function kn(n,e){const{list:t,index:r}=n.childrenRenderablesToUpdate;let i=!1;for(let o=0;o<r;o++){const a=t[o],s=a.view;if(i=e[s.type].validateRenderable(a),i)break}return n.structureDidChange=i,i&&(n.childrenRenderablesToUpdate.index=0),i}class Vt{constructor(e){this.renderer=e}render(e){e.layer=!0;const t=this.renderer,r=It(e.layerGroup,[]),i=t.renderPipes;for(let o=0;o<r.length;o++){const a=r[o];a.runOnRender(),a.instructionSet.renderPipes=i,a.structureDidChange||kn(a,i),Et(a),a.structureDidChange?(a.structureDidChange=!1,ln(a,i)):Pn(a),t.renderPipes.batch.upload(a.instructionSet)}t.globalUniforms.start({projectionMatrix:t.renderTarget.rootProjectionMatrix,worldTransformMatrix:e.layerGroup.worldTransform}),At(e.layerGroup,i),i.uniformBatch&&(i.uniformBatch.renderEnd(),i.uniformBuffer.renderEnd())}destroy(){}}Vt.extension={type:[g.WebGLRendererSystem,g.WebGPURendererSystem,g.CanvasRendererSystem],name:"layer"};function Pn(n){const{list:e,index:t}=n.childrenRenderablesToUpdate;for(let r=0;r<t;r++){const i=e[r];i.didViewUpdate&&n.updateRenderable(i)}n.childrenRenderablesToUpdate.index=0}class Ot{constructor(){this.vertexSize=4,this.indexSize=6,this.location=0,this.batcher=null,this.batch=null}get blendMode(){return this.sprite.layerBlendMode}packAttributes(e,t,r,i){const o=this.sprite,a=this.texture,s=o.layerTransform,l=s.a,c=s.b,u=s.c,d=s.d,b=s.tx,f=s.ty,p=this.bounds,v=p[0],h=p[1],B=p[2],M=p[3],S=a._layout.uvs,y=o.layerColor;e[r++]=l*h+u*M+b,e[r++]=d*M+c*h+f,e[r++]=S.x0,e[r++]=S.y0,t[r++]=y,e[r++]=i,e[r++]=l*v+u*M+b,e[r++]=d*M+c*v+f,e[r++]=S.x1,e[r++]=S.y1,t[r++]=y,e[r++]=i,e[r++]=l*v+u*B+b,e[r++]=d*B+c*v+f,e[r++]=S.x2,e[r++]=S.y2,t[r++]=y,e[r++]=i,e[r++]=l*h+u*B+b,e[r++]=d*B+c*h+f,e[r++]=S.x3,e[r++]=S.y3,t[r++]=y,e[r++]=i}packIndex(e,t,r){e[t++]=r+0,e[t++]=r+1,e[t++]=r+2,e[t++]=r+0,e[t++]=r+2,e[t++]=r+3}reset(){this.sprite=null,this.texture=null,this.batcher=null,this.batch=null,this.bounds=null}}let te;class Wt{constructor(e){this.gpuSpriteHash={},this.renderer=e,te=this.gpuSpriteHash}addRenderable(e,t){const r=this.getGpuSprite(e);e.view.didUpdate&&this.updateBatchableSprite(e,r),this.renderer.renderPipes.batch.addToBatch(r,t)}updateRenderable(e){const t=te[e.uid];e.view.didUpdate&&this.updateBatchableSprite(e,t),t.batcher.updateElement(t)}validateRenderable(e){const t=e.view._texture,r=this.getGpuSprite(e);return r.texture._source!==t._source?r.batcher.checkAndUpdateTexture(r,t):!1}destroyRenderable(e){const t=te[e.uid];F.return(t),te[e.uid]=null}updateBatchableSprite(e,t){const r=e.view;r.didUpdate=!1,t.bounds=r.bounds,t.texture=r._texture}getGpuSprite(e){return te[e.uid]||this.initGPUSprite(e)}initGPUSprite(e){const t=F.get(Ot);return t.sprite=e,t.texture=e.view._texture,t.bounds=e.view.bounds,te[e.uid]=t,e.view.didUpdate=!1,e.on("destroyed",()=>{this.destroyRenderable(e)}),t}destroy(){for(const e in this.gpuSpriteHash)F.return(this.gpuSpriteHash[e]);this.gpuSpriteHash=null,this.renderer=null}}Wt.extension={type:[g.WebGLRendererPipes,g.WebGPURendererPipes,g.CanvasRendererPipes],name:"sprite"};var Rn=`in vec2 vTextureCoord;
in vec4 vColor;
in float vTextureId;

uniform sampler2D uSamplers[%count%];
uniform float distance;

out vec4 finalColor;

void main(void){
    vec4 outColor;
    %forloop%


    // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.
   outColor.rgb = outColor.rgb / outColor.a;

    // MSDF
    float median = outColor.r + outColor.g + outColor.b -
                    min(outColor.r, min(outColor.g, outColor.b)) -
                    max(outColor.r, max(outColor.g, outColor.b));
   
    // SDF
    median = min(median, outColor.a);

    float screenPxDistance = distance * (median - 0.5);
    float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
    if (median < 0.01) {
        alpha = 0.0;
    } else if (median > 0.99) {
        alpha = 1.0;
    }

    finalColor =  vec4(vColor.rgb * alpha, alpha);
}
`,Un=`precision highp float;
in vec2 aPosition;
in vec2 aUV;
in vec4 aColor;
in float aTextureId;

uniform globalUniforms {
  mat3 projectionMatrix;
  mat3 worldTransformMatrix;
  float worldAlpha;
};

uniform mat3 transformMatrix;
uniform vec4 color;

out vec2 vTextureCoord;
out vec4 vColor;
out float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * worldTransformMatrix * transformMatrix * vec3(aPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aUV;
    vTextureId = aTextureId;

    vColor = vec4(aColor.rgb * aColor.a, aColor.a)  * worldAlpha;
}
`;function Dn(n){return mr({vertexSrc:Un,fragmentSrc:Rn,maxTextures:n,name:"sdf"})}var ht=`struct GlobalUniforms {
  projectionMatrix:mat3x3<f32>,
  worldTransformMatrix:mat3x3<f32>,
  worldAlpha: f32
}

struct LocalUniforms {
  color:vec4<f32>,
  transformMatrix:mat3x3<f32>,
  distance: f32
}

// struct DistanceUniforms {
//   distance: f32,
// }

@group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
%bindings%
@group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
//@group(3) @binding(0) var<uniform> distanceUniforms : DistanceUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) color : vec4<f32>,
    @location(2) @interpolate(flat) textureId : u32,
  };

  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
  @location(1) aUV : vec2<f32>,
  @location(2) aColor : vec4<f32>,
  @location(3) aTexture : f32,
) -> VSOutput {

  var  mvpMatrix = globalUniforms.projectionMatrix * globalUniforms.worldTransformMatrix * localUniforms.transformMatrix;

  var  colorOut = aColor.bgra * localUniforms.color.rgba;

  var alpha = vec4<f32>(
    colorOut.a * globalUniforms.worldAlpha,
    colorOut.a * globalUniforms.worldAlpha,
    colorOut.a * globalUniforms.worldAlpha,
    globalUniforms.worldAlpha
  );

  colorOut *= alpha;


  return VSOutput(
    vec4<f32>((mvpMatrix * vec3<f32>(aPosition, 1.0)).xy, 0.0, 1.0),
    aUV,
    colorOut,
    u32(aTexture)
  );
};


@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) color:vec4<f32>,
  @location(2) @interpolate(flat) textureId: u32,
) -> @location(0) vec4<f32> {


    var uvDx = dpdx(uv);
    var uvDy = dpdy(uv);

    var outColor:vec4<f32>;
    
    %forloop%
  
    var dist = outColor.r;

    // MSDF
  var median = outColor.r + outColor.g + outColor.b -
      min(outColor.r, min(outColor.g, outColor.b)) -
      max(outColor.r, max(outColor.g, outColor.b));
  // SDF
  median = min(median, outColor.a);

  // on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange
  
  var screenPxDistance = localUniforms.distance * (median - 0.5);
  var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
  if (median < 0.01) {
    alpha = 0.0;
  } else if (median > 0.99) {
    alpha = 1.0;
  }

  return vec4(color.rgb * alpha, alpha);
};
`;function Ln(n){return Sr({vertex:{source:ht,entryPoint:"mainVertex"},fragment:{source:ht,entryPoint:"mainFragment"},maxTextures:n})}class _n extends ze{constructor(){const e=new N({color:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},transformMatrix:{value:new H,type:"mat3x3<f32>"},distance:{value:4,type:"f32"}});super({glProgram:Dn(Z),gpuProgram:Ln(Z),resources:{localUniforms:e,batchSamplers:vr}})}}class Fn extends Le{constructor(){super({view:new ur})}}class $t{constructor(e){this.gpuBitmapText={},this.renderer=e}validateRenderable(e){const t=this.getGpuBitmapText(e);return this.updateContext(e,t.view.context),this.renderer.renderPipes.graphics.validateRenderable(t)}addRenderable(e,t){const r=this.getGpuBitmapText(e);this.renderer.renderPipes.batch.break(t),this.renderer.renderPipes.graphics.addRenderable(r,t),r.view.context.customShader&&this.updateDistanceField(e)}destroyRenderable(e){this.destroyRenderableByUid(e.uid)}destroyRenderableByUid(e){F.return(this.gpuBitmapText[e]),this.gpuBitmapText[e]=null}updateRenderable(e){const t=this.getGpuBitmapText(e);this.renderer.renderPipes.graphics.updateRenderable(t),t.view.context.customShader&&this.updateDistanceField(e)}updateContext(e,t){var p;const r=e.view,i=dr.getFont(r.text,r._style);t.clear(),i.distanceField.fieldType!=="none"&&(t.customShader||(this.sdfShader||(this.sdfShader=new _n),t.customShader=this.sdfShader));const o=Array.from(r.text),a=r._style;let s=(((p=a._stroke)==null?void 0:p.width)||0)/2;s+=i.baseLineOffset;const l=hr(o,a,i);let c=0;const u=a.fontSize/i.baseMeasurementFontSize;t.scale(u,u);const d=-r.anchor.x*l.width,b=-r.anchor.y*l.height;t.translate(d,b);const f=a._fill.color;for(let v=0;v<l.lines.length;v++){const h=l.lines[v];for(let B=0;B<h.charPositions.length;B++){const M=o[c++],S=i.chars[M];S!=null&&S.texture&&t.texture(S.texture,f,Math.round(h.charPositions[B]+S.xOffset),Math.round(s+S.yOffset))}s+=i.lineHeight}}getGpuBitmapText(e){return this.gpuBitmapText[e.uid]||this.initGpuText(e)}initGpuText(e){e.view._style.update();const t=F.get(Fn,e);return this.gpuBitmapText[e.uid]=t,this.updateContext(e,t.view.context),e.on("destroyed",()=>{this.destroyRenderable(e)}),this.gpuBitmapText[e.uid]}updateDistanceField(e){const t=this.getGpuBitmapText(e).view.context,r=e.view,i=r._style.fontFamily,o=fr.get(i),{a,b:s,c:l,d:c}=e.layerTransform,u=Math.sqrt(a*a+s*s),d=Math.sqrt(l*l+c*c),b=(Math.abs(u)+Math.abs(d))/2,f=o.baseRenderedFontSize/r._style.fontSize,p=1,v=b*o.distanceField.distanceRange*(1/f)*p;t.customShader.resources.localUniforms.uniforms.distance=v}destroy(){var e;for(const t in this.gpuBitmapText)this.destroyRenderableByUid(t);this.gpuBitmapText=null,(e=this.sdfShader)==null||e.destroy(!0),this.sdfShader=null,this.renderer=null}}$t.extension={type:[g.WebGLRendererPipes,g.WebGPURendererPipes,g.CanvasRendererPipes],name:"bitmapText"};class jt{constructor(e){this.gpuText={},this.renderer=e}validateRenderable(e){const t=this.getGpuText(e),r=e.view._getKey();if(t.currentKey!==r){const i=e.view,o=i._autoResolution?this.renderer.view.resolution:i._resolution,{width:a,height:s}=this.renderer.canvasText.getTextureSize(i.text,o,i._style);return!(this.renderer.canvasText.getReferenceCount(t.currentKey)===1&&a===t.texture._source.width&&s===t.texture._source.height)}return!1}addRenderable(e,t){const i=this.getGpuText(e).batchableSprite;e.view.didUpdate&&this.updateText(e),this.renderer.renderPipes.batch.addToBatch(i,t)}updateRenderable(e){const r=this.getGpuText(e).batchableSprite;e.view.didUpdate&&this.updateText(e),r.batcher.updateElement(r)}destroyRenderable(e){this.destroyRenderableById(e.uid)}destroyRenderableById(e){const t=this.gpuText[e];this.renderer.canvasText.decreaseReferenceCount(t.currentKey),F.return(t.batchableSprite),this.gpuText[e]=null}updateText(e){const t=e.view._getKey(),r=this.getGpuText(e),i=r.batchableSprite;r.currentKey!==t&&this.updateGpuText(e),e.view.didUpdate=!1,zn(i.bounds,e.view.anchor,i.texture)}updateGpuText(e){const t=this.getGpuText(e),r=t.batchableSprite,i=e.view;t.texture&&this.renderer.canvasText.decreaseReferenceCount(t.currentKey);const o=i._autoResolution?this.renderer.view.resolution:i._resolution;t.texture=r.texture=this.renderer.canvasText.getTexture(i.text,o,i._style,i._getKey()),t.currentKey=i._getKey(),r.texture=t.texture,t.needsTextureUpdate=!1}getGpuText(e){return this.gpuText[e.uid]||this.initGpuText(e)}initGpuText(e){e.view._style.update();const r={texture:null,currentKey:"--",batchableSprite:F.get(Ot),needsTextureUpdate:!0};return r.batchableSprite.sprite=e,r.batchableSprite.bounds=[0,1,0,0],this.gpuText[e.uid]=r,this.updateText(e),e.on("destroyed",()=>{this.destroyRenderable(e)}),r}destroy(){for(const e in this.gpuText)this.destroyRenderableById(e);this.gpuText=null,this.renderer=null}}jt.extension={type:[g.WebGLRendererPipes,g.WebGPURendererPipes,g.CanvasRendererPipes],name:"text"};function zn(n,e,t){const r=t._source,i=t.layout,o=i.orig,a=i.trim,s=r.width,l=r.height,c=s*o.width,u=l*o.height;if(a){const d=s*a.width,b=l*a.height;n[1]=a.x*s-e._x*c,n[0]=n[1]+d,n[3]=a.y*l-e._y*u,n[2]=n[3]+b}else n[1]=-e._x*c,n[0]=n[1]+c,n[3]=-e._y*u,n[2]=n[3]+u}const An=new Ae;class Nt{constructor(){this.activeTextures={}}getTextureSize(e,t,r){const i=ee.measureText(e||" ",r);let o=Math.ceil(Math.ceil(Math.max(1,i.width)+r.padding*2)*t),a=Math.ceil(Math.ceil(Math.max(1,i.height)+r.padding*2)*t);return o=Math.ceil(o-1e-6),a=Math.ceil(a-1e-6),o=pe(o),a=pe(a),{width:o,height:a}}getTexture(e,t,r,i){if(this.activeTextures[i])return this.increaseReferenceCount(i),this.activeTextures[i].texture;const o=ee.measureText(e||" ",r),a=Math.ceil(Math.ceil(Math.max(1,o.width)+r.padding*2)*t),s=Math.ceil(Math.ceil(Math.max(1,o.height)+r.padding*2)*t),l=Ye.getOptimalCanvasAndContext(a,s),{canvas:c}=l;this.renderTextToCanvas(e,r,t,l);const u=An;u.minX=0,u.minY=0,u.maxX=c.width/t|0,u.maxY=c.height/t|0;const d=O.getOptimalTexture(u.width,u.height,t,!1);return d.source.type="image",d.source.resource=c,d.frameWidth=o.width,d.frameHeight=o.height,d.source.update(),d.layout.updateUvs(),this.activeTextures[i]={canvasAndContext:l,texture:d,usageCount:1},d}increaseReferenceCount(e){this.activeTextures[e].usageCount++}decreaseReferenceCount(e){const t=this.activeTextures[e];t.usageCount--,t.usageCount===0&&(Ye.returnCanvasAndContext(t.canvasAndContext),O.returnTexture(t.texture),t.texture.source.resource=null,t.texture.source.type="unknown",this.activeTextures[e]=null)}getReferenceCount(e){return this.activeTextures[e].usageCount}renderTextToCanvas(e,t,r,i){var M,S,y;const{canvas:o,context:a}=i,s=br(t),l=ee.measureText(e||" ",t),c=l.lines,u=l.lineHeight,d=l.lineWidths,b=l.maxLineWidth,f=l.fontProperties,p=o.height;a.resetTransform(),a.scale(r,r),a.clearRect(0,0,l.width,l.height),a.font=s;let v,h;const B=t.dropShadow?2:1;for(let U=0;U<B;++U){const G=t.dropShadow&&U===0,R=G?Math.ceil(Math.max(1,p)+t.padding*2):0,_=R*r;if(G){a.fillStyle="black",a.strokeStyle="black";const P=t.dropShadow,j=pr(P.color),w=xt(j),C=P.blur*r,L=P.distance*r;a.shadowColor=`rgba(${w[0]*255},${w[1]*255},${w[2]*255},${P.alpha})`,a.shadowBlur=C,a.shadowOffsetX=Math.cos(P.angle)*L,a.shadowOffsetY=Math.sin(P.angle)*L+_}else{if(a.globalAlpha=((M=t._fill)==null?void 0:M.alpha)??1,a.fillStyle=t._fill?qe(t._fill,a):null,(S=t._stroke)!=null&&S.width){const P=t._stroke;a.strokeStyle=qe(t._stroke,a),a.lineWidth=P.width,a.miterLimit=P.miterLimit,a.lineJoin=P.join,a.lineCap=P.cap}a.shadowColor="black",a.shadowBlur=0,a.shadowOffsetX=0,a.shadowOffsetY=0}let x=(u-f.fontSize)/2;u-f.fontSize<0&&(x=0);const m=((y=t.stroke)==null?void 0:y.width)??0;for(let P=0;P<c.length;P++)v=m/2,h=m/2+P*u+f.ascent+x,t.align==="right"?v+=b-d[P]:t.align==="center"&&(v+=(b-d[P])/2),t._stroke&&this.drawLetterSpacing(c[P],t,i,v+t.padding,h+t.padding-R,!0),t._fill!==void 0&&this.drawLetterSpacing(c[P],t,i,v+t.padding,h+t.padding-R)}}drawLetterSpacing(e,t,r,i,o,a=!1){const{context:s}=r,l=t.letterSpacing;let c=!1;if(ee.experimentalLetterSpacingSupported&&(ee.experimentalLetterSpacing?(s.letterSpacing=`${l}px`,s.textLetterSpacing=`${l}px`,c=!0):(s.letterSpacing="0px",s.textLetterSpacing="0px")),l===0||c){a?s.strokeText(e,i,o):s.fillText(e,i,o);return}let u=i;const d=ee.graphemeSegmenter(e);let b=s.measureText(e).width,f=0;for(let p=0;p<d.length;++p){const v=d[p];a?s.strokeText(v,u,o):s.fillText(v,u,o);let h="";for(let B=p+1;B<d.length;++B)h+=d[B];f=s.measureText(h).width,u+=b-f+l,b=f}}destroy(){}}Nt.extension={type:[g.WebGLRendererSystem,g.WebGPURendererSystem,g.CanvasRendererSystem],name:"canvasText"};const Gn={alpha:1,color:0,clearBeforeRender:!0};class ve{constructor(){this.clearBeforeRender=!0,this._backgroundColor=0,this._backgroundColorRgba=[0,0,0,1],this._backgroundColorRgbaObject={r:0,g:0,b:0,a:1},this._backgroundColorString="#000000",this.color=this._backgroundColor,this.alpha=1}init(e){e={...Gn,...e},this.clearBeforeRender=e.clearBeforeRender,this.color=e.backgroundColor||this._backgroundColor,this.alpha=e.backgroundAlpha}get color(){return this._backgroundColor}set color(e){this._backgroundColor=e,this._backgroundColorString=gr(e);const t=this._backgroundColorRgbaObject,r=this._backgroundColorRgba;xt(e,r),t.r=r[0],t.g=r[1],t.b=r[2],t.a=r[3]}get alpha(){return this._backgroundColorRgba[3]}set alpha(e){this._backgroundColorRgba[3]=e}get colorRgba(){return this._backgroundColorRgba}get colorRgbaObject(){return this._backgroundColorRgbaObject}get colorString(){return this._backgroundColorString}destroy(){}}ve.extension={type:[g.WebGLRendererSystem,g.WebGPURendererSystem,g.CanvasRendererSystem],name:"background",priority:0};ve.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};class In extends z{constructor(){super({gl:{functions:`
                ${Ge}

                vec3 blendColor(vec3 base, vec3 blend,  float opacity)
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendColor(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                ${Ie}

                fn blendColorOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendColorOpacity(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}}class En extends z{constructor(){super({gl:{functions:`
                float colorBurn(float base, float blend)
                {
                    return max((1.0 - ((1.0 - base) / blend)), 0.0);
                }

                vec3 blendColorBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendColorBurn(back.rgb, front.rgb, front.a), uBlend);
            `},gpu:{functions:`
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn blendColorBurn(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendColorBurn(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}}class Hn extends z{constructor(){super({gl:{functions:`
                float colorDodge(float base, float blend)
                {
                    return base / (1.0 - blend);
                }

                vec3 blendColorDodge(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendColorDodge(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return base / (1.0 - blend);
                }

                fn blendColorDodge(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                    out = vec4<f32>(blendColorDodge(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}}class Vn extends z{constructor(){super({gl:{functions:`
                vec3 blendDarken(vec3 base, vec3 blend, float opacity)
                {
                    return (min(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendDarken(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn blendDarken(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (min(blend,base) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendDarken(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}}class On extends z{constructor(){super({gl:{functions:`
                vec3 blendDifference(vec3 base, vec3 blend,  float opacity)
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendDifference(back.rgb, front.rgb, front.a), uBlend);
            `},gpu:{functions:`
                fn blendDifference(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendDifference(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}}class Wn extends z{constructor(){super({gl:{functions:`
                float divide(float base, float blend)
                {
                    return (blend > 0.0) ? clamp(base / blend, 0.0, 1.0) : 1.0;
                }

                vec3 blendDivide(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendDivide(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn divide(base: f32, blend: f32) -> f32
                {
                    return select(1.0, clamp(base / blend, 0.0, 1.0), blend > 0.0);
                }

                fn blendDivide(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendDivide(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}}class $n extends z{constructor(){super({gl:{functions:`
                vec3 exclusion(vec3 base, vec3 blend)
                {
                    return base + blend - 2.0 * base * blend;
                }

                vec3 blendExclusion(vec3 base, vec3 blend, float opacity)
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendExclusion(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn exclusion(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return base+blend-2.0*base*blend;
                }

                fn blendExclusion(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendExclusion(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}}class jn extends z{constructor(){super({gl:{functions:`
                float hardLight(float base, float blend)
                {
                    return (blend < 0.5) ? 2.0 * base * blend : 1.0 - 2.0 * (1.0 - base) * (1.0 - blend);
                }

                vec3 blendHardLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendHardLight(back.rgb, front.rgb, front.a), uBlend);
            `},gpu:{functions:`
                fn hardLight(base: f32, blend: f32) -> f32
                {
                    return select(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, blend < 0.5);
                }

                fn blendHardLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendHardLight(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}}class Nn extends z{constructor(){super({gl:{functions:`
                float hardMix(float base, float blend)
                {
                    return (base + blend >= 1.0) ? 1.0 : 0.0;
                }

                vec3 blendHardMix(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blended = vec3(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendHardMix(back.rgb, front.rgb, front.a), uBlend);
            `},gpu:{functions:`
                fn hardMix(base: f32, blend: f32) -> f32
                {
                    return select(0.0, 1.0, base + blend >= 1.0);
                }

                fn blendHardMix(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendHardMix(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}}class Kn extends z{constructor(){super({gl:{functions:`
                vec3 blendLighten(vec3 base, vec3 blend, float opacity)
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendLighten(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn blendLighten(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLighten(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}}class Yn extends z{constructor(){super({gl:{functions:`
                float linearBurn(float base, float blend)
                {
                    return max(0.0, base + blend - 1.0);
                }

                vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendLinearBurn(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn blendLinearBurn(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendLinearBurn(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}}class qn extends z{constructor(){super({gl:{functions:`
                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendLinearDodge(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1, base + blend);
                }

                fn blendLinearDodge(base:vec3<f32>, blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLinearDodge(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}}class Xn extends z{constructor(){super({gl:{functions:`
                float linearBurn(float base, float blend) {
                    return max(0.0, base + blend - 1.0);
                }

                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                float linearLight(float base, float blend) {
                    return (blend <= 0.5) ? linearBurn(base,2.0*blend) : linearBurn(base,2.0*(blend-0.5));
                }

                vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendLinearLight(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base + blend);
                }

                fn linearLight(base: f32, blend: f32) -> f32
                {
                    return select(linearBurn(base,2.0*(blend-0.5)), linearBurn(base,2.0*blend), blend <= 0.5);
                }

                fn blendLinearLightOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLinearLightOpacity(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}}class Jn extends z{constructor(){super({gl:{functions:`
                ${Ge}

                vec3 blendLuminosity(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendLuminosity = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendLuminosity(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                ${Ie}

                fn blendLuminosity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendLuminosity: vec3<f32> = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLuminosity(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}}class Qn extends z{constructor(){super({gl:{functions:`
                vec3 negation(vec3 base, vec3 blend)
                {
                    return 1.0-abs(1.0-base-blend);
                }

                vec3 blendNegation(vec3 base, vec3 blend, float opacity)
                {
                    return (negation(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendNegation(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn blendNegation(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return 1.0-abs(1.0-base-blend);
                }

                fn blendNegationOpacity(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (blendNegation(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendNegationOpacity(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}}class Zn extends z{constructor(){super({gl:{functions:`
                float overlay(float base, float blend)
                {
                    return (blend < 0.5) ? (2.0*base*blend) : (1.0-2.0*(1.0-base)*(1.0-blend));
                }

                vec3 blendOverlay(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendOverlay(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn overlay(base: f32, blend: f32) -> f32
                {
                    return select((1.0-2.0*(1.0-base)*(1.0-blend)), (2.0*base*blend), base < 0.5);
                }

                fn blendOverlay(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendOverlay(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}}class ei extends z{constructor(){super({gl:{functions:`
                float pinLight(float base, float blend)
                {
                    return (blend <= 0.5) ? min(base, 2.0 * blend) : max(base, 2.0 * (blend - 0.5));
                }

                vec3 blendPinLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendPinLight(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn pinLight(base: f32, blend: f32) -> f32
                {
                    return select(max(base,2.0*(blend-0.5)), min(base,2.0*blend), blend <= 0.5);
                }

                fn blendPinLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendPinLight(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}}class ti extends z{constructor(){super({gl:{functions:`
                ${Ge}

                vec3 blendSaturation(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendSaturation(back.rgb, front.rgb, front.a), uBlend);
            `},gpu:{functions:`
                ${Ie}

                fn blendSaturation(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendSaturation(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
            `}})}}class ri extends z{constructor(){super({gl:{functions:`
                float softLight(float base, float blend)
                {
                    return (blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend));
                }

                vec3 blendSoftLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendSoftLight(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn softLight(base: f32, blend: f32) -> f32
                {
                    return select(2.0 * base * blend + base * base * (1.0 - 2.0 * blend), sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), blend < 0.5);
                }

                fn blendSoftLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendSoftLight(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}}class ni extends z{constructor(){super({gl:{functions:`
                float subtract(float base, float blend)
                {
                    return max(0.0, base - blend);
                }

                vec3 blendSubtract(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                fragColor = vec4(blendSubtract(back.rgb, front.rgb, front.a), uBlend);
                `},gpu:{functions:`
                fn subtract(base: f32, blend: f32) -> f32
                {
                    return max(0, base - blend);
                }

                fn blendSubtract(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendSubtract(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}}class ii extends z{constructor(){super({gl:{functions:`
                float colorBurn(float base, float blend)
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                float colorDodge(float base, float blend)
                {
                    return min(1.0, base / (1.0-blend));
                }

                float vividLight(float base, float blend)
                {
                    return (blend < 0.5) ? colorBurn(base,(2.0*blend)) : colorDodge(base,(2.0*(blend-0.5)));
                }

                vec3 blendVividLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                fragColor = vec4(blendVividLight(back.rgb, front.rgb, front.a), uBlend);
            `},gpu:{functions:`
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base / (1.0-blend));
                }

                fn vividLight(base: f32, blend: f32) -> f32
                {
                    return select(colorDodge(base,(2.0*(blend-0.5))), colorBurn(base,(2.0*blend)), blend<0.5);
                }

                fn blendVividLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendVividLight(back.rgb, front.rgb, front.a), blendUniforms.uBlend);
                `}})}}const Re={color:In,"color-burn":En,"color-dodge":Hn,darken:Vn,difference:On,divide:Wn,exclusion:$n,"hard-light":jn,"hard-mix":Nn,lighten:Kn,"linear-burn":Yn,"linear-dodge":qn,"linear-light":Xn,luminosity:Jn,negation:Qn,overlay:Zn,"pin-light":ei,saturation:ti,"soft-light":ri,subtract:ni,"vivid-light":ii};class Kt{constructor(e){this.isAdvanced=!1,this.filterHash={},this.renderer=e}setBlendMode(e,t,r){if(this.activeBlendMode===t){this.isAdvanced&&this.renderableList.push(e);return}this.activeBlendMode=t,this.isAdvanced&&this.endAdvancedBlendMode(r),this.isAdvanced=!!Re[t],this.isAdvanced&&(this.beginAdvancedBlendMode(r),this.renderableList.push(e))}beginAdvancedBlendMode(e){this.renderer.renderPipes.batch.break(e);const t=this.activeBlendMode;if(!Re[t]){console.warn(`Unable to assign 'BLEND_MODES.${t}' using the blend mode pipeline`);return}this.filterHash[t]||(this.filterHash[t]=new pt({filters:[new Re[t]]}));const r={type:"filter",action:"pushFilter",renderables:[],filterEffect:this.filterHash[t],canBundle:!1};this.renderableList=r.renderables,e.add(r)}endAdvancedBlendMode(e){this.renderableList=null,this.renderer.renderPipes.batch.break(e),e.add({type:"filter",action:"popFilter",canBundle:!1})}buildStart(){this.isAdvanced=!1}buildEnd(e){this.isAdvanced&&this.endAdvancedBlendMode(e)}destroy(){this.renderer=null,this.renderableList=null;for(const e in this.filterHash)this.filterHash[e].destroy();this.filterHash=null}}Kt.extension={type:[g.WebGLRendererPipes,g.WebGPURendererPipes,g.CanvasRendererPipes],name:"blendMode"};class Yt{constructor(e){this.stackIndex=0,this.globalUniformDataStack=[],this.uniformsPool=[],this.activeUniforms=[],this.bindGroupPool=[],this.activeBindGroups=[],this.renderer=e}reset(){this.stackIndex=0;for(let e=0;e<this.activeUniforms.length;e++)this.uniformsPool.push(this.activeUniforms[e]);for(let e=0;e<this.activeBindGroups.length;e++)this.bindGroupPool.push(this.activeBindGroups[e]);this.activeUniforms.length=0,this.activeBindGroups.length=0}start(e){this.reset(),this.push(e)}bind({projectionMatrix:e,worldTransformMatrix:t,worldColor:r,offset:i}){const o=this.stackIndex?this.globalUniformDataStack[this.stackIndex-1]:{projectionMatrix:this.renderer.renderTarget.renderTarget.projectionMatrix,worldTransformMatrix:new H,worldColor:4294967295,offset:new ge},a={projectionMatrix:e||this.renderer.renderTarget.renderTarget.projectionMatrix,worldTransformMatrix:t||o.worldTransformMatrix,worldColor:r||o.worldColor,offset:i||o.offset,bindGroup:null},s=this.uniformsPool.pop()||this.createUniforms();this.activeUniforms.push(s);const l=s.uniforms;l.projectionMatrix=a.projectionMatrix,l.worldTransformMatrix.copyFrom(a.worldTransformMatrix),l.worldTransformMatrix.tx-=a.offset.x,l.worldTransformMatrix.ty-=a.offset.y,l.worldAlpha=(a.worldColor>>24&255)/255,s.update();let c;this.renderer.renderPipes.uniformBatch?c=this.renderer.renderPipes.uniformBatch.getUniformBindGroup(s,!1):(this.renderer.uniformBuffer.updateUniformGroup(s),c=this.bindGroupPool.pop()||new me,this.activeBindGroups.push(c),c.setResource(s,0)),a.bindGroup=c,this.currentGlobalUniformData=a}push(e){this.bind(e),this.globalUniformDataStack[this.stackIndex++]=this.currentGlobalUniformData}pop(){this.currentGlobalUniformData=this.globalUniformDataStack[--this.stackIndex-1]}get bindGroup(){return this.currentGlobalUniformData.bindGroup}get uniformGroup(){return this.currentGlobalUniformData.bindGroup.resources[0]}createUniforms(){return new N({projectionMatrix:{value:new H,type:"mat3x3<f32>"},worldTransformMatrix:{value:new H,type:"mat3x3<f32>"},worldAlpha:{value:1,type:"f32"}},{ubo:!0,isStatic:!0})}destroy(){}}Yt.extension={type:[g.WebGLRendererSystem,g.WebGPURendererSystem,g.CanvasRendererSystem],name:"globalUniforms"};const qt={f32:4,"vec2<f32>":8,"vec3<f32>":12,"vec4<f32>":16,"mat2x2<f32>":16*3,"mat3x3<f32>":16*3,"mat4x4<f32>":16*4};function oi(n){const e=n.map(o=>({data:o,offset:0,size:0}));let t=0,r=0,i=0;for(let o=0;o<e.length;o++){const a=e[o];if(t=qt[a.data.type],!t)throw new Error(`Unknown type ${a.data.type}`);if(a.data.size>1&&(t=Math.max(t,16)*a.data.size),a.size=t,r%t!==0&&r<16){const s=r%t%16;r+=s,i+=s}r+t>16?(i=Math.ceil(i/16)*16,a.offset=i,i+=t,r=t):(a.offset=i,r+=t,i+=t)}return i=Math.ceil(i/16)*16,{uboElements:e,size:i}}const Ue=[{type:"mat3x3<f32>",test:n=>n.value.a!==void 0,code:n=>`
                var ${n}_matrix = uv.${n}.toArray(true);

                data[offset] = ${n}_matrix[0];
                data[offset+1] = ${n}_matrix[1];
                data[offset+2] = ${n}_matrix[2];

                data[offset + 4] = ${n}_matrix[3];
                data[offset + 5] = ${n}_matrix[4];
                data[offset + 6] = ${n}_matrix[5];

                data[offset + 8] = ${n}_matrix[6];
                data[offset + 9] = ${n}_matrix[7];
                data[offset + 10] = ${n}_matrix[8];
            `},{type:"vec4<f32>",test:n=>n.type==="vec4<f32>"&&n.size===1&&n.value.width!==void 0,code:n=>`
                        v = uv.${n};

                        data[offset] = v.x;
                        data[offset+1] = v.y;
                        data[offset+2] = v.width;
                        data[offset+3] = v.height;
                    `},{type:"vec2<f32>",test:n=>n.type==="vec2<f32>"&&n.size===1&&n.value.x!==void 0,code:n=>`
                    v = uv.${n};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                `}],ai={f32:`
        data[offset] = v;
    `,"vec2<f32>":`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,"vec3<f32>":`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,"vec4<f32>":`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,"mat2x2<f32>":`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,"mat3x3<f32>":`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,"mat4x4<f32>":`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `};function si(n){const e=[`
        var v = null;
        var v2 = null;
        var t = 0;
        var index = 0;
    `];let t=0;for(let i=0;i<n.length;i++){const o=n[i],a=o.data.name;let s=!1,l=0;for(let c=0;c<Ue.length;c++)if(Ue[c].test(o.data)){l=o.offset/4,e.push(`offset += ${l-t};`,Ue[c].code(a)),s=!0;break}if(!s)if(o.data.size>1){const c=Math.max(qt[o.data.type]/16,1),u=o.data.value.length/o.data.size,d=(4-u%4)%4;l=o.offset/4,e.push(`
                    v = uv.${a};
                    offset += ${l-t};

                    t = 0;

                    for(var i=0; i < ${o.data.size*c}; i++)
                    {
                        for(var j = 0; j < ${u}; j++)
                        {
                            data[offset++] = v[t++];
                        }
                        offset += ${d};
                    }
                `)}else{const c=ai[o.data.type];l=o.offset/4,e.push(`
                    v = uv.${a};
                    offset += ${l-t};
                    ${c};
                `)}t=l}const r=e.join(`
`);return new Function("uv","data","offset",r)}class Xt{constructor(e){this._syncFunctionHash={},this.renderer=e}ensureUniformGroup(e){e._syncFunction||this.initUniformGroup(e)}initUniformGroup(e){const t=e.signature;let r=this._syncFunctionHash[t];if(!r){const i=Object.keys(e.uniformStructures).map(s=>e.uniformStructures[s]),o=oi(i),a=si(o.uboElements);r=this._syncFunctionHash[t]={layout:o,syncFunction:a}}return e._syncFunction=r.syncFunction,e.buffer=new se({data:new Float32Array(r.layout.size/4),usage:W.UNIFORM|W.COPY_DST}),e._syncFunction}syncUniformGroup(e,t,r){const i=e._syncFunction||this.initUniformGroup(e);return t||(t=e.buffer.data),r||(r=0),i(e.uniforms,t,r),!0}updateUniformGroup(e){if(e.isStatic&&!e.dirtyId)return!1;e.dirtyId=0;const t=this.syncUniformGroup(e);return e.buffer.update(),t}destroy(){throw new Error("Method not implemented.")}}Xt.extension={type:[g.WebGLRendererSystem,g.WebGPURendererSystem,g.CanvasRendererSystem],name:"uniformBuffer"};class ye{constructor(e){this.renderer=e}run(e){const{renderer:t}=this;t.runners.init.emit(t.options),e.hello&&console.log(`PixiJS 8.0.0-alpha.0 - ${t.rendererLogId} - https://pixijs.com`)}destroy(){}}ye.extension={type:[g.WebGLRendererSystem,g.WebGPURendererSystem,g.CanvasRendererSystem],name:"startup",priority:0};ye.defaultOptions={hello:!1};class li extends be{constructor(e){e.resource||(e.resource=xe.ADAPTER.createCanvas()),e.width||(e.width=e.resource.width,e.autoDensity||(e.width/=e.resolution)),e.height||(e.height=e.resource.height,e.autoDensity||(e.height/=e.resolution)),super(e),this.type="image",this.alphaMode=0,this.autoDensity=e.autoDensity;const t=e.resource;(this.pixelWidth!==t.width||this.pixelWidth!==t.height)&&this.resizeCanvas()}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight}resize(e=this.width,t=this.height,r=this._resolution){super.resize(e,t,r),this.resizeCanvas()}}const De=new Map;function ci(n,e){if(!De.has(n)){const t=new $({source:new li({resource:n,...e})});De.set(n,t)}return De.get(n)}class Se{constructor(e){this.renderer=e}get resolution(){return this.texture.source._resolution}set resolution(e){this.texture.source.resize(this.texture.source.width,this.texture.source.height,e)}init(e){this.element=e.element||xe.ADAPTER.createCanvas(),this.antialias=!!e.antialias,this.texture=ci(this.element,e),this.multiView=!!e.multiView}resizeView(e,t,r){this.texture.source.resize(e,t,r)}destroy(e){e&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null}}Se.extension={type:[g.WebGLRendererSystem,g.WebGPURendererSystem,g.CanvasRendererSystem],name:"view",priority:0};Se.defaultOptions={width:800,height:600,resolution:xe.RESOLUTION,autoDensity:!1,antialias:!1};const pi={...ve.defaultOptions,...Se.defaultOptions,...ye.defaultOptions},gi=[kt,Bt,ve,Yt,Xt,ye,Se,Nt,Vt,wt,Tt,Pt,Kt,Rt,Ut,Dt,Lt,Wt,Gt,zt,$t,jt];class mi{constructor(){this.runners={init:new I("init"),destroy:new I("destroy"),contextChange:new I("contextChange"),reset:new I("reset"),update:new I("update"),postrender:new I("postrender"),prerender:new I("prerender"),resize:new I("resize")},this._systemsHash={}}setup(e){let t;for(t in e.systems){const r=e.systems[t];this.addSystem(r.value,r.name)}}addRunners(...e){e.forEach(t=>{this.runners[t]=new I(t)})}addSystem(e,t){const r=new e(this);if(this[t])throw new Error(`Whoops! The name "${t}" is already in use`);this[t]=r,this._systemsHash[t]=r;for(const i in this.runners)this.runners[i].add(r);return this}emitWithCustomOptions(e,t){const r=Object.keys(this._systemsHash);e.items.forEach(i=>{const o=r.find(a=>this._systemsHash[a]===i);i[e.name](t[o])})}destroy(){Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash={}}}export{fi as B,re as G,Z as M,I as R,E as S,kr as a,vn as b,hi as c,mi as d,pi as e,Ze as f,Sr as g,ci as h,gi as i,mr as j,vr as k,bi as s};
