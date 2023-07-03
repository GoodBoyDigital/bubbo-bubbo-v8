import{h as w,E as p,i as M,M as R,j as G,k as x,m as E,n as v,o as T,b as ee,q as te,t as re,e as b}from"./index-be0ec2b6.js";import{g as _,M as L,a as ne,c as A,f as se,S as B,B as oe,G as P,b as ie,i as ae,d as ue,R as S,e as de,h as ce,A as he}from"./SharedSystems-d46f2c5b.js";var U=`struct GlobalUniforms {
  projectionMatrix:mat3x3<f32>,
  worldTransformMatrix:mat3x3<f32>,
  worldAlpha: f32
}

@group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;

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

  var  mvpMatrix = globalUniforms.projectionMatrix * globalUniforms.worldTransformMatrix;

  var  colorOut = aColor;

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

%bindings%

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
  
    // multiply the alpha!
    outColor.r *= outColor.a;
    outColor.g *= outColor.a;
    outColor.b *= outColor.a;

    return (outColor) * color;
};
`;function pe(a){return _({vertex:{source:U,entryPoint:"mainVertex"},fragment:{source:U,entryPoint:"mainFragment"},maxTextures:a})}class I{init(){this.shader=new w({gpuProgram:pe(L),groups:{}})}execute(e,t){e.state.blendMode=t.blendMode,t.textures.bindGroup||(t.textures.bindGroup=ne(t.textures.textures));const r=this.shader.gpuProgram,n=e.renderer.encoder,s=e.renderer.globalUniforms.bindGroup;this.shader.groups[1]=t.textures.bindGroup;const o=t.batchParent;n.setPipelineFromGeometryProgramAndState(o.geometry,r,e.state),n.setGeometry(o.geometry),n.setBindGroup(0,s,r),n.setBindGroup(1,t.textures.bindGroup,r),n.renderPassEncoder.drawIndexed(t.size,1,t.start)}destroy(){this.shader.destroy(!0),this.shader=null}}I.extension={type:[p.WebGPUPipesAdaptor],name:"batch"};var C=`struct GlobalUniforms {
  projectionMatrix:mat3x3<f32>,
  worldTransformMatrix:mat3x3<f32>,
  worldAlpha: f32
}

struct LocalUniforms {
  color:vec4<f32>,
  transformMatrix:mat3x3<f32>
}


@group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
%bindings%
@group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;


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

  var  colorOut = aColor * localUniforms.color.bgra;

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
  
    // multiply the alpha!
    outColor.r *= outColor.a;
    outColor.g *= outColor.a;
    outColor.b *= outColor.a;

    return (outColor) * color; //* 0.1;
};
`;function le(a){return _({vertex:{source:C,entryPoint:"mainVertex"},fragment:{source:C,entryPoint:"mainFragment"},maxTextures:a})}class F{init(){const e=new M({color:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},transformMatrix:{value:new R,type:"mat3x3<f32>"}});this.shader=new w({gpuProgram:le(L),groups:{2:new G({0:e})}})}execute(e,t){const r=t.view.context,n=r.customShader||this.shader,s=e.renderer,o=s.graphicsContext;if(!o.getGpuContext(r).batches.length)return;const{geometry:i,batches:d}=o.getContextRenderData(r);e.state.blendMode=t.layerBlendMode;const u=n.resources.localUniforms;n.resources.localUniforms.uniforms.transformMatrix=t.layerTransform,A(t.layerColor,u.uniforms.color,0);const h=s.encoder;h.setPipelineFromGeometryProgramAndState(i,n.gpuProgram,e.state),h.setGeometry(i);const c=s.globalUniforms.bindGroup;h.setBindGroup(0,c,n.gpuProgram);const l=s.renderPipes.uniformBatch.getUniformBindGroup(u,!0);h.setBindGroup(2,l,n.gpuProgram);for(let f=0;f<d.length;f++){const y=d[f];n.groups[1]=y.textures.bindGroup,h.setBindGroup(1,y.textures.bindGroup,n.gpuProgram),h.renderPassEncoder.drawIndexed(y.size,1,y.start)}}destroy(){this.shader.destroy(!0),this.shader=null}}F.extension={type:[p.WebGPUPipesAdaptor],name:"graphics"};class V{execute(e,t){const r=e.renderer,n=t.view,s=e.state;s.blendMode=t.layerBlendMode;const o=e.localUniforms;o.uniforms.transformMatrix=t.layerTransform,o.update(),A(t.layerColor,o.uniforms.color,0);let i=n._shader;i||(i=e.meshShader,i.groups[2]=r.texture.getTextureBindGroup(n.texture)),i.groups[0]=r.globalUniforms.bindGroup,i.groups[1]=r.renderPipes.uniformBatch.getUniformBindGroup(o,!0),r.encoder.draw({geometry:n._geometry,shader:i,state:s})}}V.extension={type:[p.WebGPUPipesAdaptor],name:"mesh"};class D{constructor(e){this.hash={},this.renderer=e}contextChange(e){this.gpu=e}getBindGroup(e,t,r){return e.updateKey(),this.hash[e.key]||this.createBindGroup(e,t,r)}createBindGroup(e,t,r){const n=this.gpu.device,s=t.layout[r],o=[];for(const d in s){const u=e.resources[d]??e.resources[s[d]];let h;if(u.resourceType==="uniformGroup"){const c=u;this.renderer.uniformBuffer.updateUniformGroup(c);const l=c.buffer;h={buffer:this.renderer.buffer.getGPUBuffer(l),offset:0,size:l.descriptor.size}}else if(u.resourceType==="buffer"){const c=u;h={buffer:this.renderer.buffer.getGPUBuffer(c),offset:0,size:c.descriptor.size}}else if(u.resourceType==="bufferResource"){const c=u;h={buffer:this.renderer.buffer.getGPUBuffer(c.buffer),offset:c.offset,size:c.size}}else if(u.resourceType==="textureSampler"){const c=u;h=this.renderer.texture.getGpuSampler(c)}else if(u.resourceType==="textureSource"){const c=u;h=this.renderer.texture.getGpuSource(c).createView({})}o.push({binding:s[d],resource:h})}const i=n.createBindGroup({layout:t._gpuLayout.bindGroups[r],entries:o});return this.hash[e.key]=i,i}destroy(){}}D.extension={type:[p.WebGPUSystem],name:"bindGroup"};class O{constructor(){this._gpuBuffers={}}contextChange(e){this.gpu=e}getGPUBuffer(e){return this._gpuBuffers[e.uid]||this.createGPUBuffer(e)}updateBuffer(e){const t=this._gpuBuffers[e.uid]||this.createGPUBuffer(e);return e._updateID&&e.data&&(e._updateID=0,this.gpu.device.queue.writeBuffer(t,0,e.data.buffer,0,e._updateSize)),t}destroyAll(){for(const e in this._gpuBuffers)this._gpuBuffers[e].destroy();this._gpuBuffers={}}createGPUBuffer(e){const t=this.gpu.device.createBuffer(e.descriptor);return e._updateID=0,e.data&&(se(e.data.buffer,t.getMappedRange()),t.unmap()),this._gpuBuffers[e.uid]=t,e.on("update",this.updateBuffer,this),e.on("change",this.onBufferChange,this),e.on("destroy",this.onBufferDestroy,this),t}onBufferChange(e){let t=this._gpuBuffers[e.uid];t.destroy(),t=this.createGPUBuffer(e),e._updateID=0}onBufferDestroy(e){this._gpuBuffers[e.uid].destroy(),this._gpuBuffers[e.uid]=null}destroy(){throw new Error("Method not implemented.")}}O.extension={type:[p.WebGPUSystem],name:"buffer"};class fe{constructor({minUniformOffsetAlignment:e}){this.minUniformOffsetAlignment=256,this.byteIndex=0,this.minUniformOffsetAlignment=e,this.data=new Float32Array(65535)}clear(){this.byteIndex=0}addEmptyGroup(e){if(e>this.minUniformOffsetAlignment/4)throw new Error(`UniformBufferBatch: array is too large: ${e*4}`);const t=this.byteIndex;let r=t+e*4;if(r=Math.ceil(r/this.minUniformOffsetAlignment)*this.minUniformOffsetAlignment,r>this.data.length*4)throw new Error("UniformBufferBatch: ubo batch got too big");return this.byteIndex=r,t}addGroup(e){const t=this.addEmptyGroup(e.length);for(let r=0;r<e.length;r++)this.data[t/4+r]=e[r];return t}upload(){}destroy(){this.buffer.destroy(),this.buffer=null,this.data=null}}class H{constructor(e){this.colorMaskCache=15,this.renderer=e}setMask(e){this.colorMaskCache!==e&&(this.colorMaskCache=e,this.renderer.pipeline.setColorMask(e))}destroy(){}}H.extension={type:[p.WebGPUSystem],name:"colorMask"};class W{constructor(e){this._renderer=e}async init(){return this._initPromise?this._initPromise:(this._initPromise=this.createDeviceAndAdaptor({}).then(e=>{this.gpu=e,this._renderer.runners.contextChange.emit(this.gpu)}),this._initPromise)}contextChange(e){this._renderer.gpu=e}async createDeviceAndAdaptor(e){const t=await navigator.gpu.requestAdapter(e),r=await t.requestDevice();return{adapter:t,device:r}}destroy(){this._renderer=null}}W.extension={type:[p.WebGPUSystem],name:"device"};class k{constructor(e){this.boundBindGroup={},this.boundVertexBuffer={},this.renderer=e}start(){this.commandFinished=new Promise(e=>{this.resolveCommandFinished=e}),this.commandEncoder=this.renderer.gpu.device.createCommandEncoder()}beginRenderPass(e,t){this.renderPassEncoder&&this.renderPassEncoder.end(),this.clearCache(),this.renderPassEncoder=this.commandEncoder.beginRenderPass(t.descriptor),this.setViewport(e.viewport)}setViewport(e){this.renderPassEncoder.setViewport(e.x,e.y,e.width,e.height,0,1)}setScissor(e){e.fit(this.renderer.renderTarget.renderTarget.viewport),this.renderPassEncoder.setScissorRect(e.minX,e.minY,e.width,e.height)}clearScissor(){const e=this.renderer.renderTarget.renderTarget.viewport;this.renderPassEncoder.setScissorRect(e.x,e.y,e.width,e.height)}setPipelineFromGeometryProgramAndState(e,t,r,n){const s=this.renderer.pipeline.getPipeline(e,t,r,n);this.setPipeline(s)}setPipeline(e){this.boundPipeline!==e&&(this.boundPipeline=e,this.renderPassEncoder.setPipeline(e))}setVertexBuffer(e,t){this.boundVertexBuffer[e]!==t&&(this.boundVertexBuffer[e]=t,this.renderPassEncoder.setVertexBuffer(e,this.renderer.buffer.updateBuffer(t)))}setIndexBuffer(e){this.boundIndexBuffer!==e&&(this.boundIndexBuffer=e,this.renderPassEncoder.setIndexBuffer(this.renderer.buffer.updateBuffer(e),"uint32"))}setBindGroup(e,t,r){if(this.boundBindGroup[e]===t)return;this.boundBindGroup[e]=t;const n=this.renderer.bindGroup.getBindGroup(t,r,e);this.renderPassEncoder.setBindGroup(e,n)}setGeometry(e){for(const t in e.attributes){const r=e.attributes[t];this.setVertexBuffer(r.shaderLocation,r.buffer)}e.indexBuffer&&this.setIndexBuffer(e.indexBuffer)}setShaderBindGroups(e,t){for(const r in e.groups){const n=e.groups[r];t||this.syncBindGroup(n),this.setBindGroup(r,n,e.gpuProgram)}}syncBindGroup(e){for(const t in e.resources){const r=e.resources[t];r.isUniformGroup&&this.renderer.uniformBuffer.updateUniformGroup(r)}}draw(e){const{geometry:t,shader:r,state:n,topology:s,size:o,start:i,instanceCount:d,skipSync:u}=e;this.setPipelineFromGeometryProgramAndState(t,r.gpuProgram,n,s),this.setGeometry(t),this.setShaderBindGroups(r,u),t.indexBuffer?this.renderPassEncoder.drawIndexed(o||t.indexBuffer.data.length,d||1,i||0):this.renderPassEncoder.draw(o||t.getSize(),d||1,i||0)}finishRenderPass(){this.renderPassEncoder&&(this.renderPassEncoder.end(),this.renderPassEncoder=null)}postrender(){this.finishRenderPass(),this.gpu.device.queue.submit([this.commandEncoder.finish()]),this.resolveCommandFinished()}restoreRenderPass(){const e=this.renderer.renderTarget.getDescriptor(this.renderer.renderTarget.renderTarget,!1,[0,0,0,1]);this.renderPassEncoder=this.commandEncoder.beginRenderPass(e);const t=this.boundPipeline,r={...this.boundVertexBuffer},n=this.boundIndexBuffer,s={...this.boundBindGroup};this.clearCache();const o=this.renderer.renderTarget.renderTarget.viewport;this.renderPassEncoder.setViewport(o.x,o.y,o.width,o.height,0,1),this.setPipeline(t);for(const i in r)this.setVertexBuffer(i,r[i]);for(const i in s)this.setBindGroup(i,s[i],null);this.setIndexBuffer(n)}clearCache(){for(let e=0;e<16;e++)this.boundBindGroup[e]=null,this.boundVertexBuffer[e]=null;this.boundIndexBuffer=null,this.boundPipeline=null}destroy(){}contextChange(e){this.gpu=e}}k.extension={type:[p.WebGPUSystem],name:"encoder"};class z{constructor(e){this.renderTargetStencilState={},this.renderer=e,e.renderTarget.onRenderTargetChange.add(this)}onRenderTargetChange(e){let t=this.renderTargetStencilState[e.uid];t||(t=this.renderTargetStencilState[e.uid]={stencilMode:B.DISABLED,stencilReference:0}),this.activeRenderTarget=e,this.setStencilMode(t.stencilMode,t.stencilReference)}setStencilMode(e,t){const r=this.renderTargetStencilState[this.activeRenderTarget.uid];r.stencilMode=e,r.stencilReference=t;const n=this.renderer;n.pipeline.setStencilMode(e),n.encoder.renderPassEncoder.setStencilReference(t)}destroy(){}}z.extension={type:[p.WebGPUSystem],name:"stencil"};const m=128;class N{constructor(e){this.bindGroupHash={},this.buffers=[],this.bindGroups=[],this.bufferResources=[],this.renderer=e,this.batchBuffer=new fe({minUniformOffsetAlignment:m});const t=256/m;for(let r=0;r<t;r++){let n=x.UNIFORM|x.COPY_DST;r===0&&(n|=x.COPY_SRC),this.buffers.push(new E({data:this.batchBuffer.data,usage:n}))}}renderEnd(){this.uploadBindGroups(),this.resetBindGroups()}resetBindGroups(){for(const e in this.bindGroupHash)this.bindGroupHash[e]=null;this.batchBuffer.clear()}getUniformBindGroup(e,t){if(!t&&this.bindGroupHash[e.uid])return this.bindGroupHash[e.uid];this.renderer.uniformBuffer.ensureUniformGroup(e);const r=e.buffer.data,n=this.batchBuffer.addEmptyGroup(r.length);return this.renderer.uniformBuffer.syncUniformGroup(e,this.batchBuffer.data,n/4),this.bindGroupHash[e.uid]=this.getBindGroup(n/m),this.bindGroupHash[e.uid]}getUniformBufferResource(e){this.renderer.uniformBuffer.updateUniformGroup(e);const t=e.buffer.data,r=this.batchBuffer.addGroup(t);return this.getBufferResource(r/m)}getArrayBindGroup(e){const t=this.batchBuffer.addGroup(e);return this.getBindGroup(t/m)}getArrayBufferResource(e){const r=this.batchBuffer.addGroup(e)/m;return this.getBufferResource(r)}getBufferResource(e){if(!this.bufferResources[e]){const t=this.buffers[e%2];this.bufferResources[e]=new oe({buffer:t,offset:(e/2|0)*256,size:m})}return this.bufferResources[e]}getBindGroup(e){if(!this.bindGroups[e]){const t=new G({0:this.getBufferResource(e)});this.bindGroups[e]=t}return this.bindGroups[e]}uploadBindGroups(){const e=this.renderer.buffer,t=this.buffers[0];t.update(this.batchBuffer.byteIndex),e.updateBuffer(t);const r=this.renderer.gpu.device.createCommandEncoder();for(let n=1;n<this.buffers.length;n++){const s=this.buffers[n];r.copyBufferToBuffer(e.getGPUBuffer(t),m,e.getGPUBuffer(s),0,this.batchBuffer.byteIndex)}this.renderer.gpu.device.queue.submit([r.finish()])}destroy(){for(let e=0;e<this.bindGroups.length;e++)this.bindGroups[e].destroy();this.bindGroups=null,this.bindGroupHash=null;for(let e=0;e<this.buffers.length;e++)this.buffers[e].destroy();this.buffers=null;for(let e=0;e<this.bufferResources.length;e++)this.bufferResources[e].destroy();this.bufferResources=null,this.batchBuffer.destroy(),this.bindGroupHash=null,this.renderer=null}}N.extension={type:[p.WebGPUPipes],name:"uniformBatch"};class ge extends G{constructor(){super({0:new E({data:new Float32Array(128),usage:x.UNIFORM|x.COPY_DST})})}get buffer(){return this.resources[0]}get data(){return this.resources[0].data}}class K{constructor(e){this.activeBindGroups=[],this.activeBindGroupIndex=0,this.renderer=e}getUniformBindGroup(e){const t=this.renderer;t.uniformBuffer.ensureUniformGroup(e);const r=v.get(ge);return t.uniformBuffer.syncUniformGroup(e,r.data,0),r.buffer.update(e.buffer.data.byteLength),this.activeBindGroups[this.activeBindGroupIndex++]=r,r}renderEnd(){for(let e=0;e<this.activeBindGroupIndex;e++)v.return(this.activeBindGroups[e]);this.activeBindGroupIndex=0}}K.extension={type:[p.WebGPUPipes],name:"uniformBuffer"};const me={"point-list":0,"line-list":1,"line-strip":2,"triangle-list":3,"triangle-strip":4};function ye(a,e,t,r,n,s,o,i){return a<<26|e<<18|o<<14|t<<8|r<<3|i<<1|n<<4|s}class j{constructor(e){this._moduleCache={},this._bufferLayoutsCache={},this._pipeCache={},this.colorMask=15,this.multisampleCount=1,this.renderer=e}contextChange(e){this.gpu=e,this.setStencilMode(B.DISABLED)}setMultisampleCount(e){this.multisampleCount=e}setColorMask(e){this.colorMask=e}setStencilMode(e){this.stencilMode=e,this.stencilState=P[e]}setPipeline(e,t,r,n){const s=this.getPipeline(e,t,r);n.setPipeline(s)}getPipeline(e,t,r,n){e._layoutKey||this.generateBufferKey(e),t._layoutKey||(this.generateProgramKey(t),this.renderer.shader.createProgramLayout(t)),n=n||e.topology;const s=ye(e._layoutKey,t._layoutKey,r.data,r._blendModeId,this.stencilMode,this.multisampleCount,this.colorMask,me[n]);return this._pipeCache[s]?this._pipeCache[s]:(this._pipeCache[s]=this.createPipeline(e,t,r,n),this._pipeCache[s])}createPipeline(e,t,r,n){const s=this.gpu.device,o=this.createVertexBufferLayouts(e),i=this.renderer.state.getColorTargets(r);let d=this.stencilState;d=P[this.stencilMode],i[0].writeMask=this.stencilMode===B.RENDERING_MASK_ADD?0:this.colorMask;const u={vertex:{module:this.getModule(t.vertex.source),entryPoint:t.vertex.entryPoint,buffers:o},fragment:{module:this.getModule(t.fragment.source),entryPoint:t.fragment.entryPoint,targets:i},primitive:{topology:n,cullMode:r.cullMode},layout:t._gpuLayout.pipeline,multisample:{count:this.multisampleCount},depthStencil:d,label:"PIXI Pipeline"};return s.createRenderPipeline(u)}getModule(e){return this._moduleCache[e]||this.createModule(e)}createModule(e){const t=this.gpu.device;return this._moduleCache[e]=t.createShaderModule({code:e}),this._moduleCache[e]}generateProgramKey(e){const{vertex:t,fragment:r}=e,n=t.source+r.source+t.entryPoint+r.entryPoint;return e._layoutKey=T(n,"program"),e._layoutKey}generateBufferKey(e){const t=[];let r=0;const n=Object.keys(e.attributes).sort();for(let o=0;o<n.length;o++){const i=e.attributes[n[o]];t[r++]=i.shaderLocation,t[r++]=i.offset,t[r++]=i.format,t[r++]=i.stride}const s=t.join("");return e._layoutKey=T(s,"geometry"),e._layoutKey}createVertexBufferLayouts(e){if(this._bufferLayoutsCache[e._layoutKey])return this._bufferLayoutsCache[e._layoutKey];const t=[];return e.buffers.forEach(r=>{const n={arrayStride:0,stepMode:"vertex",attributes:[]},s=n.attributes;for(const o in e.attributes){const i=e.attributes[o];i.buffer===r&&(n.arrayStride=i.stride,s.push({shaderLocation:i.shaderLocation,offset:i.offset,format:i.format}))}s.length&&t.push(n)}),this._bufferLayoutsCache[e._layoutKey]=t,t}destroy(){throw new Error("Method not implemented.")}}j.extension={type:[p.WebGPUSystem],name:"pipeline"};class xe{constructor(){this.contexts=[],this.msaaTextures=[],this.msaaSamples=1}}const Ge=[0,0,0,0];class q{constructor(e){this.rootProjectionMatrix=new R,this.onRenderTargetChange=new ie("onRenderTargetChange"),this.renderSurfaceToRenderTargetHash=new Map,this.gpuRenderTargetHash={},this.renderTargetStack=[],this.renderer=e}renderStart({target:e,clear:t,clearColor:r}){this.rootRenderTarget=this.getRenderTarget(e),this.rootProjectionMatrix=this.rootRenderTarget.projectionMatrix,this.renderingToScreen=ae(this.rootRenderTarget),this.renderTargetStack.length=0,this.renderer.encoder.start(),this.push(this.rootRenderTarget,t,r??this.renderer.background.colorRgba)}contextChange(e){this.gpu=e}bind(e,t=!0,r){const n=this.getRenderTarget(e);this.renderTarget=n;const s=this.getGpuRenderTarget(n);(n.width!==s.width||n.height!==s.height)&&this.resizeGpuRenderTarget(n);const o=this.getDescriptor(n,t,r);return s.descriptor=o,this.renderer.encoder.beginRenderPass(n,s),this.renderer.pipeline.setMultisampleCount(s.msaaSamples),this.onRenderTargetChange.emit(n),n}getGpuColorTexture(e){const t=this.getGpuRenderTarget(e);return t.contexts[0]?t.contexts[0].getCurrentTexture():this.renderer.texture.getGpuSource(e.colorTextures[0].source)}getDescriptor(e,t,r){const n=this.getGpuRenderTarget(e),s=t?"clear":"load",o=e.colorTextures.map((u,h)=>{const c=n.contexts[h];let l,f;return c?l=c.getCurrentTexture().createView():l=this.renderer.texture.getTextureView(u),n.msaaTextures[h]&&(f=l,l=this.renderer.texture.getTextureView(n.msaaTextures[h])),{view:l,resolveTarget:f,clearValue:r||Ge,storeOp:"store",loadOp:s}});let i;return e.depthTexture&&(i={view:this.renderer.texture.getGpuSource(e.depthTexture.source).createView(),stencilStoreOp:"store",stencilLoadOp:s}),{colorAttachments:o,depthStencilAttachment:i}}push(e,t=!0,r){const n=this.bind(e,t,r);return this.renderTargetStack.push(n),n}pop(){this.renderTargetStack.pop(),this.bind(this.renderTargetStack[this.renderTargetStack.length-1],!1)}getRenderTarget(e){return this.renderSurfaceToRenderTargetHash.get(e)??this.initRenderTarget(e)}copyToTexture(e,t,r,n){const s=this.renderer,o=s.renderTarget.getGpuColorTexture(e),i=s.texture.getGpuSource(t.source);return s.encoder.commandEncoder.copyTextureToTexture({texture:o,origin:r},{texture:i},n),t}restart(){this.bind(this.rootRenderTarget,!1)}destroy(){}initRenderTarget(e){let t=null;return e instanceof HTMLCanvasElement&&(e=ue(e)),e instanceof S?t=e:e instanceof ee&&(t=new S({colorTextures:[e],depthTexture:e.source.depthStencil})),t.isRoot=!0,this.renderSurfaceToRenderTargetHash.set(e,t),t}getGpuRenderTarget(e){return this.gpuRenderTargetHash[e.uid]||this.initGpuRenderTarget(e)}initGpuRenderTarget(e){e.isRoot=!0;const t=new xe;return e.colorTextures.forEach((r,n)=>{if(r.source.resource instanceof HTMLCanvasElement){const s=e.colorTexture.source.resource.getContext("webgpu");try{s.configure({device:this.gpu.device,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,format:"bgra8unorm",alphaMode:"opaque"})}catch(o){console.error(o)}t.contexts[n]=s}if(t.msaa=r.source.antialias,r.source.antialias){const s=new te({width:0,height:0,sampleCount:4});t.msaaTextures[n]=s}}),t.msaa&&(t.msaaSamples=4,e.depthTexture&&(e.depthTexture.source.sampleCount=4)),this.gpuRenderTargetHash[e.uid]=t,t}resizeGpuRenderTarget(e){const t=this.getGpuRenderTarget(e);t.width=e.width,t.height=e.height,t.msaa&&e.colorTextures.forEach((r,n)=>{const s=t.msaaTextures[n];s==null||s.resize(r.source.width,r.source.height,r.source._resolution)})}}q.extension={type:[p.WebGPUSystem],name:"renderTarget"};class Y{constructor(e){this.renderer=e}contextChange(e){this.gpu=e}createProgramLayout(e){const t=this.gpu.device;if(!e._gpuLayout)if(e.gpuLayout){const r=e.gpuLayout.map(s=>t.createBindGroupLayout({entries:s})),n={bindGroupLayouts:r};e._gpuLayout={bindGroups:r,pipeline:t.createPipelineLayout(n)}}else e._gpuLayout={bindGroups:null,pipeline:"auto"}}updateData(e){for(let t=0;t<e.gpuProgram.layout.length;t++){const r=e.groups[t],n=e.gpuProgram.layout[t];for(const s in n){const o=r.resources[s]??r.resources[n[s]];if(o instanceof M){const i=o;this.renderer.uniformBuffer.updateUniformGroup(i)}}}}destroy(){throw new Error("Method not implemented.")}}Y.extension={type:[p.WebGPUSystem],name:"shader"};const g={};g.normal={alpha:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}};g.add={alpha:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one",operation:"add"}};g.multiply={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"dst",dstFactor:"one-minus-src-alpha",operation:"add"}};g.screen={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src",operation:"add"}};g.overlay={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src",operation:"add"}};g.none={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"zero",dstFactor:"zero",operation:"add"}};g["normal-npm"]={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"}};g["add-npm"]={alpha:{srcFactor:"one",dstFactor:"one",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one",operation:"add"}};g["screen-npm"]={alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one-minus-src",operation:"add"}};class X{constructor(){this.defaultState=new re,this.defaultState.blend=!0}contextChange(e){this.gpu=e}getColorTargets(e){return[{format:"bgra8unorm",writeMask:0,blend:g[e.blendMode]||g.normal}]}destroy(){this.gpu=null}}X.extension={type:[p.WebGPUSystem],name:"state"};const be={type:"image",upload(a,e,t){const r=a.resource,n=(a.pixelWidth|0)*(a.pixelHeight|0),s=r.byteLength/n;t.device.queue.writeTexture({texture:e},r,{offset:0,rowsPerImage:a.pixelWidth,bytesPerRow:a.pixelWidth*s},{width:a.pixelWidth,height:a.pixelHeight,depthOrArrayLayers:1})}},Be={type:"image",upload(a,e,t){var o,i;const r=a.resource;if(!r)return;const n=((o=a.resource)==null?void 0:o.width)||a.pixelWidth,s=((i=a.resource)==null?void 0:i.height)||a.pixelHeight;t.device.queue.copyExternalImageToTexture({source:r},{texture:e},{width:n,height:s})}};class ve{constructor(e){this.device=e,this.sampler=e.createSampler({minFilter:"linear"}),this.pipelines={}}getMipmapPipeline(e){let t=this.pipelines[e];return t||(this.mipmapShaderModule||(this.mipmapShaderModule=this.device.createShaderModule({code:`
                        var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
                        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));

                        struct VertexOutput {
                        @builtin(position) position : vec4<f32>,
                        @location(0) texCoord : vec2<f32>,
                        };

                        @vertex
                        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
                        var output : VertexOutput;
                        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
                        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
                        return output;
                        }

                        @group(0) @binding(0) var imgSampler : sampler;
                        @group(0) @binding(1) var img : texture_2d<f32>;

                        @fragment
                        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
                        return textureSample(img, imgSampler, texCoord);
                        }
                    `})),t=this.device.createRenderPipeline({layout:"auto",vertex:{module:this.mipmapShaderModule,entryPoint:"vertexMain"},fragment:{module:this.mipmapShaderModule,entryPoint:"fragmentMain",targets:[{format:e}]}}),this.pipelines[e]=t),t}generateMipmap(e){const t=this.getMipmapPipeline(e.format);if(e.dimension==="3d"||e.dimension==="1d")throw new Error("Generating mipmaps for non-2d textures is currently unsupported!");let r=e;const n=e.depthOrArrayLayers||1,s=e.usage&GPUTextureUsage.RENDER_ATTACHMENT;if(!s){const d={size:{width:Math.ceil(e.width/2),height:Math.ceil(e.height/2),depthOrArrayLayers:n},format:e.format,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT,mipLevelCount:e.mipLevelCount-1};r=this.device.createTexture(d)}const o=this.device.createCommandEncoder({}),i=t.getBindGroupLayout(0);for(let d=0;d<n;++d){let u=e.createView({baseMipLevel:0,mipLevelCount:1,dimension:"2d",baseArrayLayer:d,arrayLayerCount:1}),h=s?1:0;for(let c=1;c<e.mipLevelCount;++c){const l=r.createView({baseMipLevel:h++,mipLevelCount:1,dimension:"2d",baseArrayLayer:d,arrayLayerCount:1}),f=o.beginRenderPass({colorAttachments:[{view:l,storeOp:"store",loadOp:"clear",clearValue:{r:0,g:0,b:0,a:0}}]}),y=this.device.createBindGroup({layout:i,entries:[{binding:0,resource:this.sampler},{binding:1,resource:u}]});f.setPipeline(t),f.setBindGroup(0,y),f.draw(3,1,0,0),f.end(),u=l}}if(!s){const d={width:Math.ceil(e.width/2),height:Math.ceil(e.height/2),depthOrArrayLayers:n};for(let u=1;u<e.mipLevelCount;++u)o.copyTextureToTexture({texture:r,mipLevel:u-1},{texture:e,mipLevel:u},d),d.width=Math.ceil(d.width/2),d.height=Math.ceil(d.height/2)}return this.device.queue.submit([o.finish()]),s||r.destroy(),e}}class ${constructor(){this.gpuSources={},this.gpuSamplers={},this.bindGroupHash={},this.textureViewHash={},this.managedTextureSources={},this.uploads={image:Be,buffer:be}}contextChange(e){this.gpu=e}initSource(e){if(e.autoGenerateMipmaps){const n=Math.max(e.pixelWidth,e.pixelHeight);e.mipLevelCount=Math.floor(Math.log2(n))+1}const t={size:{width:e.pixelWidth,height:e.pixelHeight},format:e.format,sampleCount:e.sampleCount,mipLevelCount:e.mipLevelCount,dimension:e.dimension,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC},r=this.gpu.device.createTexture(t);return this.gpuSources[e.uid]=r,this.managedTextureSources[e.uid]=e,e.on("update",this.onSourceUpdate,this),e.on("destroy",this.onSourceDestroy,this),e.on("resize",this.onSourceResize,this),this.onSourceUpdate(e),r}onSourceUpdate(e){const t=this.gpuSources[e.uid];t&&(this.uploads[e.type]&&this.uploads[e.type].upload(e,t,this.gpu),e.autoGenerateMipmaps&&e.mipLevelCount>1&&(this.mipmapGenerator||(this.mipmapGenerator=new ve(this.gpu.device)),this.mipmapGenerator.generateMipmap(t)))}onSourceDestroy(e){e.off("update",this.onSourceUpdate,this),e.off("destroy",this.onSourceDestroy,this),e.off("resize",this.onSourceResize,this);const t=this.gpuSources[e.uid];delete this.gpuSources[e.uid],t.destroy()}onSourceResize(e){const t=this.gpuSources[e.uid];(t.width!==e.pixelWidth||t.height!==e.pixelHeight)&&(this.gpuSources[e.uid].destroy(),this.gpuSources[e.uid]=null,this.initSource(e))}initSampler(e){return this.gpuSamplers[e.resourceId]=this.gpu.device.createSampler(e),this.gpuSamplers[e.resourceId]}getGpuSampler(e){return this.gpuSamplers[e.resourceId]||this.initSampler(e)}getGpuSource(e){return this.gpuSources[e.uid]||this.initSource(e)}getTextureBindGroup(e){return this.bindGroupHash[e.id]??this.createTextureBindGroup(e)}createTextureBindGroup(e){const t=e.id;return this.bindGroupHash[t]=new G({0:e.source,1:e.style}),this.bindGroupHash[t]}getTextureView(e){const t=e.source;return this.textureViewHash[t.uid]??this.createTextureView(t)}createTextureView(e){return this.textureViewHash[e.uid]=this.getGpuSource(e).createView(),this.textureViewHash[e.uid]}destroy(){throw new Error("Method not implemented.")}}$.extension={type:[p.WebGPUSystem],name:"texture"};const Te=[...de,W,O,$,q,k,Y,X,j,H,z,D],Pe=[...ce,N,K],Se=[I,V,F],J=[],Q=[],Z=[];b.handleByNamedList(p.WebGPUSystem,J);b.handleByNamedList(p.WebGPUPipes,Q);b.handleByNamedList(p.WebGPUPipesAdaptor,Z);b.add(...Te,...Pe,...Se);class Me extends he{constructor(){const e={type:"webgpu",systems:J,renderPipes:Q,renderPipeAdaptors:Z};super(e)}}export{Me as WebGPURenderer};
