(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,71766,59850,22127,14919,89237,16542,e=>{"use strict";let t,i;var n=e.i(75907),r=e.i(91788),a=e.i(32369),o=e.i(51941),s=a,l=a;let d=new l.Box3,c=new l.Vector3;class u extends l.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new l.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new l.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new l.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new l.InterleavedBufferAttribute(i,3,0)),this.setAttribute("instanceEnd",new l.InterleavedBufferAttribute(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));let n=new l.InstancedInterleavedBuffer(i,2*t,1);return this.setAttribute("instanceColorStart",new l.InterleavedBufferAttribute(n,t,0)),this.setAttribute("instanceColorEnd",new l.InterleavedBufferAttribute(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new l.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new l.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),d.setFromBufferAttribute(t),this.boundingBox.union(d))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new l.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)c.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(c)),c.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(c));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}e.s(["LineSegmentsGeometry",()=>u],59850);var f=a,p=e.i(78424);let h=parseInt(a.REVISION.replace(/\D+/g,""));e.s(["version",()=>h],22127);class m extends f.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:f.UniformsUtils.clone(f.UniformsUtils.merge([p.UniformsLib.common,p.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new f.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${h>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}e.s(["LineMaterial",()=>m],14919);let v=h>=125?"uv1":"uv2";e.s(["UV1",()=>v],89237);let y=new s.Vector4,g=new s.Vector3,S=new s.Vector3,x=new s.Vector4,b=new s.Vector4,w=new s.Vector4,E=new s.Vector3,L=new s.Matrix4,A=new s.Line3,M=new s.Vector3,_=new s.Box3,U=new s.Sphere,z=new s.Vector4;function B(e,t,n){return z.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),z.multiplyScalar(1/z.w),z.x=i/n.width,z.y=i/n.height,z.applyMatrix4(e.projectionMatrixInverse),z.multiplyScalar(1/z.w),Math.abs(Math.max(z.x,z.y))}class O extends s.Mesh{constructor(e=new u,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,r=0,a=t.count;e<a;e++,r+=2)g.fromBufferAttribute(t,e),S.fromBufferAttribute(i,e),n[r]=0===r?0:n[r-1],n[r+1]=n[r]+g.distanceTo(S);let r=new s.InstancedInterleavedBuffer(n,2,1);return e.setAttribute("instanceDistanceStart",new s.InterleavedBufferAttribute(r,1,0)),e.setAttribute("instanceDistanceEnd",new s.InterleavedBufferAttribute(r,1,1)),this}raycast(e,n){let r,a,o=this.material.worldUnits,l=e.camera;null!==l||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let d=void 0!==e.params.Line2&&e.params.Line2.threshold||0;t=e.ray;let c=this.matrixWorld,u=this.geometry,f=this.material;if(i=f.linewidth+d,null===u.boundingSphere&&u.computeBoundingSphere(),U.copy(u.boundingSphere).applyMatrix4(c),o)r=.5*i;else{let e=Math.max(l.near,U.distanceToPoint(t.origin));r=B(l,e,f.resolution)}if(U.radius+=r,!1!==t.intersectsSphere(U)){if(null===u.boundingBox&&u.computeBoundingBox(),_.copy(u.boundingBox).applyMatrix4(c),o)a=.5*i;else{let e=Math.max(l.near,_.distanceToPoint(t.origin));a=B(l,e,f.resolution)}_.expandByScalar(a),!1!==t.intersectsBox(_)&&(o?function(e,n){let r=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,l=a.attributes.instanceEnd,d=Math.min(a.instanceCount,o.count);for(let a=0;a<d;a++){A.start.fromBufferAttribute(o,a),A.end.fromBufferAttribute(l,a),A.applyMatrix4(r);let d=new s.Vector3,c=new s.Vector3;t.distanceSqToSegment(A.start,A.end,c,d),c.distanceTo(d)<.5*i&&n.push({point:c,pointOnLine:d,distance:t.origin.distanceTo(c),object:e,face:null,faceIndex:a,uv:null,[v]:null})}}(this,n):function(e,n,r){let a=n.projectionMatrix,o=e.material.resolution,l=e.matrixWorld,d=e.geometry,c=d.attributes.instanceStart,u=d.attributes.instanceEnd,f=Math.min(d.instanceCount,c.count),p=-n.near;t.at(1,w),w.w=1,w.applyMatrix4(n.matrixWorldInverse),w.applyMatrix4(a),w.multiplyScalar(1/w.w),w.x*=o.x/2,w.y*=o.y/2,w.z=0,E.copy(w),L.multiplyMatrices(n.matrixWorldInverse,l);for(let n=0;n<f;n++){if(x.fromBufferAttribute(c,n),b.fromBufferAttribute(u,n),x.w=1,b.w=1,x.applyMatrix4(L),b.applyMatrix4(L),x.z>p&&b.z>p)continue;if(x.z>p){let e=x.z-b.z,t=(x.z-p)/e;x.lerp(b,t)}else if(b.z>p){let e=b.z-x.z,t=(b.z-p)/e;b.lerp(x,t)}x.applyMatrix4(a),b.applyMatrix4(a),x.multiplyScalar(1/x.w),b.multiplyScalar(1/b.w),x.x*=o.x/2,x.y*=o.y/2,b.x*=o.x/2,b.y*=o.y/2,A.start.copy(x),A.start.z=0,A.end.copy(b),A.end.z=0;let d=A.closestPointToPointParameter(E,!0);A.at(d,M);let f=s.MathUtils.lerp(x.z,b.z,d),h=f>=-1&&f<=1,m=E.distanceTo(M)<.5*i;if(h&&m){A.start.fromBufferAttribute(c,n),A.end.fromBufferAttribute(u,n),A.start.applyMatrix4(l),A.end.applyMatrix4(l);let i=new s.Vector3,a=new s.Vector3;t.distanceSqToSegment(A.start,A.end,a,i),r.push({point:a,pointOnLine:i,distance:t.origin.distanceTo(a),object:e,face:null,faceIndex:n,uv:null,[v]:null})}}}(this,l,n))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(y),this.material.uniforms.resolution.value.set(y.z,y.w))}}class C extends u{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e,t=3){let i=e.length-t,n=new Float32Array(2*i);if(3===t)for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];else for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5],n[2*r+6]=e[r+6],n[2*r+7]=e[r+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class T extends O{constructor(e=new C,t=new m({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}e.s(["Line2",()=>T],16542);let D=r.forwardRef(function({points:e,color:t=0xffffff,vertexColors:i,linewidth:s,lineWidth:l,segments:d,dashed:c,...f},p){var h,v;let y=(0,o.useThree)(e=>e.size),g=r.useMemo(()=>d?new O:new T,[d]),[S]=r.useState(()=>new m),x=(null==i||null==(h=i[0])?void 0:h.length)===4?4:3,b=r.useMemo(()=>{let n=d?new u:new C,r=e.map(e=>{let t=Array.isArray(e);return e instanceof a.Vector3||e instanceof a.Vector4?[e.x,e.y,e.z]:e instanceof a.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(r.flat()),i){t=0xffffff;let e=i.map(e=>e instanceof a.Color?e.toArray():e);n.setColors(e.flat(),x)}return n},[e,d,i,x]);return r.useLayoutEffect(()=>{g.computeLineDistances()},[e,g]),r.useLayoutEffect(()=>{c?S.defines.USE_DASH="":delete S.defines.USE_DASH,S.needsUpdate=!0},[c,S]),r.useEffect(()=>()=>{b.dispose(),S.dispose()},[b]),r.createElement("primitive",(0,n.default)({object:g,ref:p},f),r.createElement("primitive",{object:b,attach:"geometry"}),r.createElement("primitive",(0,n.default)({object:S,attach:"material",color:t,vertexColors:!!i,resolution:[y.width,y.height],linewidth:null!=(v=null!=s?s:l)?v:1,dashed:c,transparent:4===x},f)))});e.s(["Line",()=>D],71766)},7186,e=>{"use strict";var t=e.i(91398),i=e.i(91788),n=e.i(63285),r=e.i(71766);let a={light:{primary:"hsl(330.9554, 64.0816%, 51.9608%)",secondary:"hsl(175.4622, 58.6207%, 39.8039%)",accent:"hsl(17.5691, 80.4444%, 44.1176%)",muted:"hsl(180, 6.9307%, 60.3922%)",border:"hsl(186.3158, 8.2969%, 55.0980%)",foreground:"hsl(192.2034, 80.8219%, 14.3137%)",background:"hsl(43.8462, 86.6667%, 94.1176%)"},dark:{primary:"hsl(330.9554, 64.0816%, 51.9608%)",secondary:"hsl(175.4622, 58.6207%, 39.8039%)",accent:"hsl(17.5691, 80.4444%, 44.1176%)",muted:"hsl(194.4828, 14.1463%, 40.1961%)",border:"hsl(194.4828, 14.1463%, 40.1961%)",foreground:"hsl(180, 6.9307%, 60.3922%)",background:"hsl(192.2222, 100.0000%, 10.5882%)"}},o=e=>{let t=document.documentElement.classList.contains("dark")||document.body.classList.contains("dark")?"dark":"light",i={"hsl(var(--primary))":"primary","hsl(var(--secondary))":"secondary","hsl(var(--accent))":"accent","hsl(var(--muted))":"muted","hsl(var(--border))":"border","hsl(var(--foreground))":"foreground","hsl(var(--background))":"background"}[e];return i&&a[t][i]?(e=>{let t=e.match(/hsl\(([^,]+),\s*([^,]+)%,\s*([^)]+)%\)/);if(!t)return e;let i=parseFloat(t[1])/360,n=parseFloat(t[2])/100,r=parseFloat(t[3])/100,a=(e,t,i)=>(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e,o=r<.5?r*(1+n):r+n-r*n,s=2*r-o,l=Math.round(255*a(s,o,i+1/3)),d=Math.round(255*a(s,o,i)),c=Math.round(255*a(s,o,i-1/3));return`#${(0x1000000+(l<<16)+(d<<8)+c).toString(16).slice(1)}`})(a[t][i]):e},s=e=>{let[t,n]=(0,i.useState)(()=>o(e));return(0,i.useEffect)(()=>{let t=()=>{n(o(e))};t();let i=new MutationObserver(e=>{e.forEach(e=>{"class"===e.attributeName&&t()})});return"u">typeof document&&(i.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),i.observe(document.body,{attributes:!0,attributeFilter:["class"]})),()=>i.disconnect()},[e]),t};function l({size:e=20,divisions:r=50,color:a="hsl(var(--primary))",opacity:o=.15}){let l=(0,i.useRef)(null),d=s(a);return(0,n.useFrame)(e=>{l.current&&l.current.material&&(l.current.material.opacity=o+.05*Math.sin(.5*e.clock.elapsedTime))}),(0,t.jsx)("gridHelper",{ref:l,args:[e,r,d,d],rotation:[Math.PI/2,0,0],position:[0,0,-2]})}function d({count:e=15,color:a="hsl(var(--secondary))"}){let o=(0,i.useRef)(null),l=s(a),d=(0,i.useMemo)(()=>{let t=[];for(let i=0;i<e;i++){let e=[],i=2*Math.random()-1,n=Math.floor(3*Math.random())+2,r=(Math.random()-.5)*20,a=(Math.random()-.5)*15;e.push([r,a,i]);for(let t=0;t<n;t++){let t=3*Math.random()+1;"horizontal"==(Math.random()>.5?"horizontal":"vertical")?r+=(Math.random()>.5?1:-1)*t:a+=(Math.random()>.5?1:-1)*t,e.push([r,a,i])}t.push(e)}return t},[e]);return(0,n.useFrame)(e=>{if(o.current){let t=(Math.sin(2*e.clock.elapsedTime)+1)*.5;o.current.children.forEach((i,n)=>{i.material&&void 0!==i.material.opacity&&(i.material.opacity=.3+.4*t+.2*Math.sin(e.clock.elapsedTime+.1*n))})}}),(0,t.jsx)("group",{ref:o,children:d.map((e,i)=>(0,t.jsx)(r.Line,{points:e,color:l,lineWidth:2,transparent:!0},i))})}function c({count:e=8,color:a="hsl(var(--accent))"}){let o=(0,i.useRef)(null),l=s(a),d=(0,i.useMemo)(()=>Array.from({length:e},(e,t)=>{let i=8+.5*t,n=[];for(let e=0;e<=64;e++){let t=e/64*Math.PI*2,r=Math.cos(t)*i,a=Math.sin(t)*i,o=.5*Math.sin(3*t);n.push([r,a,o])}return{points:n,phase:.2*t}}),[e]);return(0,n.useFrame)(e=>{o.current&&(o.current.rotation.z=.1*e.clock.elapsedTime,o.current.children.forEach((t,i)=>{let n=d[i].phase;t.material&&void 0!==t.material.opacity&&(t.material.opacity=.4+.3*Math.sin(1.5*e.clock.elapsedTime+n))}))}),(0,t.jsx)("group",{ref:o,children:d.map((e,i)=>(0,t.jsx)(r.Line,{points:e.points,color:l,lineWidth:1.5,transparent:!0},i))})}function u({width:e=10,height:a=6,color:o="hsl(var(--primary))"}){let l=(0,i.useRef)(null),d=s(o),c=(0,i.useMemo)(()=>[[[-e/2,a/2,0],[e/2,a/2,0]],[[e/2,a/2,0],[e/2,-a/2,0]],[[e/2,-a/2,0],[-e/2,-a/2,0]],[[-e/2,-a/2,0],[-e/2,a/2,0]]],[e,a]);return(0,n.useFrame)(e=>{l.current&&l.current.children.forEach((t,i)=>{t.material&&void 0!==t.material.opacity&&(t.material.opacity=.6+.4*Math.sin(2*e.clock.elapsedTime+.25*i))})}),(0,t.jsx)("group",{ref:l,children:c.map((e,i)=>(0,t.jsx)(r.Line,{points:e,color:d,lineWidth:3,transparent:!0},i))})}function f({radius:e=5,color:a="hsl(var(--secondary))",sweepSpeed:o=1}){let l=(0,i.useRef)(null),d=(0,i.useRef)(null),c=s(a),u=(0,i.useMemo)(()=>{let t=[];for(let i=0;i<=64;i++){let n=i/64*Math.PI*2,r=Math.cos(n)*e,a=Math.sin(n)*e;t.push([r,a,0])}return t},[e]),f=(0,i.useMemo)(()=>[[[-e,0,0],[e,0,0]],[[0,-e,0],[0,e,0]]],[e]);return(0,n.useFrame)(e=>{if(d.current&&(d.current.rotation.z=e.clock.elapsedTime*o),l.current){let t=.2*Math.sin(2*e.clock.elapsedTime);l.current.children.forEach(e=>{e.material&&void 0!==e.material.opacity&&(e.material.opacity=.4+t)})}}),(0,t.jsxs)("group",{ref:l,children:[(0,t.jsx)(r.Line,{points:u,color:c,lineWidth:2,transparent:!0}),(0,t.jsx)(r.Line,{points:u.map(([e,t,i])=>[.6*e,.6*t,i]),color:c,lineWidth:1.5,transparent:!0}),(0,t.jsx)(r.Line,{points:u.map(([e,t,i])=>[.3*e,.3*t,i]),color:c,lineWidth:1,transparent:!0}),f.map((e,i)=>(0,t.jsx)(r.Line,{points:e,color:c,lineWidth:1,transparent:!0},i)),(0,t.jsx)("group",{ref:d,children:(0,t.jsx)(r.Line,{points:[[0,0,0],[e,0,0]],color:c,lineWidth:3,transparent:!0})})]})}function p({points:e=[],color:a="hsl(var(--primary))",animated:o=!0}){let l=(0,i.useRef)(null),d=s(a),c=(0,i.useMemo)(()=>{if(e.length<2)return[];let t=[];for(let i=0;i<e.length-1;i++){let n=e[i],r=e[i+1],a=[(n[0]+r[0])/2,(n[1]+r[1])/2+2*Math.random()-1,(n[2]+r[2])/2];t.push([n,a,r])}return t},[e]);return(0,n.useFrame)(e=>{l.current&&o&&l.current.children.forEach((t,i)=>{t.material&&void 0!==t.material.opacity&&(t.material.opacity=.5+.3*Math.sin(1.5*e.clock.elapsedTime+.3*i))})}),(0,t.jsx)("group",{ref:l,children:c.map((e,i)=>(0,t.jsx)(r.Line,{points:e,color:d,lineWidth:2,transparent:!0},i))})}function h({opacity:e=.1,color:i="hsl(var(--primary))",size:n=20}){let r=s(i);return(0,t.jsx)("div",{className:"absolute inset-0 pointer-events-none",style:{backgroundImage:`
                    linear-gradient(${r} 1px, transparent 1px),
                    linear-gradient(90deg, ${r} 1px, transparent 1px)
                `,backgroundSize:`${n}px ${n}px`,opacity:e}})}e.s(["AnimatedGrid",()=>l,"BackgroundGrid",()=>h,"CircuitLines",()=>d,"ConnectionLines",()=>p,"FlowingLines",()=>c,"NeonBorderLines",()=>u,"RadarSweep",()=>f])},67060,e=>{e.n(e.i(7186))}]);