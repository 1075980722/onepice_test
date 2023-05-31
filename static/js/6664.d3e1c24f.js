"use strict";(self["webpackChunkonepic"]=self["webpackChunkonepic"]||[]).push([[6664],{14647:function(e,t,r){r.d(t,{D:function(){return $},b:function(){return W}});var n=r(8693),i=r(94370),o=r(14539),a=r(98290),s=r(96377),c=r(36315),l=r(26616),u=r(87307),d=r(55372),h=r(8943),f=r(49120),m=r(37011),p=r(14009),v=r(63281),g=r(89145),_=r(71779),x=r(84367),T=r(70914),b=r(32786),S=r(6784),A=r(97195),y=r(59260),w=r(78895),C=r(30382),M=r(43714),O=r(73682),P=r(48601),I=r(50213),R=r(82175),E=r(76161),L=r(10262),N=r(19207),H=r(87035),D=r(73893),F=r(65982),z=r(74824),B=r(63914),V=r(84970),U=r(51780),G=r(30150);function W(e){const t=new B.kG,{vertex:r,fragment:W,varyings:$}=t;return(0,L.Sv)(r,e),t.include(h.f),$.add("vpos","vec3"),t.include(P.k,e),t.include(u.f,e),t.include(g.L,e),e.hasColorTextureTransform&&t.include(O.av),e.output!==s.H.Color&&e.output!==s.H.Alpha||(e.hasNormalTextureTransform&&t.include(O.NI),e.hasEmissionTextureTransform&&t.include(O.R5),e.hasOcclusionTextureTransform&&t.include(O.jF),e.hasMetallicRoughnessTextureTransform&&t.include(O.DT),(0,L.hY)(r,e),t.include(d.O,e),t.include(l.w,e),e.normalType===d.h.Attribute&&e.offsetBackfaces&&t.include(a.w),t.include(x.Q,e),t.include(v.Bb,e),e.instancedColor&&t.attributes.add(G.T.INSTANCECOLOR,"vec4"),$.add("localvpos","vec3"),t.include(m.D,e),t.include(o.qj,e),t.include(f.R,e),t.include(p.c,e),r.uniforms.add(new H.N("externalColor",(e=>e.externalColor))),$.add("vcolorExt","vec4"),e.hasMultipassTerrain&&$.add("depth","float"),e.hasModelTransformation&&r.uniforms.add(new z.g("model",(e=>(0,n.pC)(e.modelTransformation)?e.modelTransformation:i.I))),r.code.add(F.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${F.H.float(I.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===d.h.Attribute?F.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===d.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?F.H`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?F.H`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?F.H`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?F.H`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?F.H`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===s.H.Alpha&&(t.include(c.f5,e),t.include(R.z,e),t.include(A.l,e),W.uniforms.add([new D.p("opacity",(e=>e.opacity)),new D.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&W.uniforms.add(new V.A("tex",(e=>e.texture))),W.include(E.y),W.code.add(F.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?F.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?F.H`colorUV`:F.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:F.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?F.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:F.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===s.H.Color&&(t.include(c.f5,e),t.include(b.XP,e),t.include(T.K,e),t.include(R.z,e),t.include(e.instancedDoublePrecision?M.hb:M.XE,e),t.include(A.l,e),(0,L.hY)(W,e),W.uniforms.add([r.uniforms.get("localOrigin"),new N.J("ambient",(e=>e.ambient)),new N.J("diffuse",(e=>e.diffuse)),new D.p("opacity",(e=>e.opacity)),new D.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&W.uniforms.add(new V.A("tex",(e=>e.texture))),t.include(C.jV,e),t.include(w.T,e),W.include(E.y),t.include(y.k,e),(0,b.PN)(W),(0,b.sC)(W),(0,S.F1)(W),W.code.add(F.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?F.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?F.H`colorUV`:F.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:F.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===d.h.ScreenDerivative?F.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:F.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===C.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?F.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:F.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?F.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:F.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?F.H`normalize(posWorld);`:F.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?F.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===C.f7.Normal||e.pbrMode===C.f7.Schematic?F.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?F.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:F.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===U.A.Color?F.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(_.s,e),t}const $=Object.freeze(Object.defineProperty({__proto__:null,build:W},Symbol.toStringTag,{value:"Module"}))},51931:function(e,t,r){r.d(t,{R:function(){return F},b:function(){return D}});var n=r(14539),i=r(98290),o=r(96377),a=r(36315),s=r(26616),c=r(87307),l=r(55372),u=r(8943),d=r(49120),h=r(37011),f=r(14009),m=r(89145),p=r(71779),v=r(70914),g=r(32786),_=r(6784),x=r(97195),T=r(78895),b=r(30382),S=r(43714),A=r(48601),y=r(50213),w=r(82175),C=r(76161),M=r(10262),O=r(19207),P=r(87035),I=r(73893),R=r(65982),E=r(63914),L=r(84970),N=r(51780),H=r(30150);function D(e){const t=new E.kG,{vertex:r,fragment:D,varyings:F}=t;return(0,M.Sv)(r,e),t.include(u.f),F.add("vpos","vec3"),t.include(A.k,e),t.include(c.f,e),t.include(m.L,e),e.output!==o.H.Color&&e.output!==o.H.Alpha||((0,M.hY)(t.vertex,e),t.include(l.O,e),t.include(s.w,e),e.offsetBackfaces&&t.include(i.w),e.instancedColor&&t.attributes.add(H.T.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),e.hasMultipassTerrain&&F.add("depth","float"),t.include(h.D,e),t.include(n.qj,e),t.include(d.R,e),t.include(f.c,e),r.uniforms.add(new P.N("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),r.code.add(R.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${R.H.float(y.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?R.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===o.H.Alpha&&(t.include(a.f5,e),t.include(w.z,e),t.include(x.l,e),D.uniforms.add([new I.p("opacity",(e=>e.opacity)),new I.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&D.uniforms.add(new L.A("tex",(e=>e.texture))),D.include(C.y),D.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?R.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?R.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===o.H.Color&&(t.include(a.f5,e),t.include(g.XP,e),t.include(v.K,e),t.include(w.z,e),t.include(e.instancedDoublePrecision?S.hb:S.XE,e),t.include(x.l,e),(0,M.hY)(t.fragment,e),(0,_.Pe)(D),(0,g.PN)(D),(0,g.sC)(D),D.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new O.J("ambient",(e=>e.ambient)),new O.J("diffuse",(e=>e.diffuse)),new I.p("opacity",(e=>e.opacity)),new I.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&D.uniforms.add(new L.A("tex",(e=>e.texture))),t.include(b.jV,e),t.include(T.T,e),D.include(C.y),t.extensions.add("GL_OES_standard_derivatives"),(0,_.F1)(D),D.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?R.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?R.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?R.H`albedo = mix(albedo, vec3(1), 0.9);`:R.H``}
        ${R.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?e.spherical?R.H`vec3 normalGround = normalize(vpos + localOrigin);`:R.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:R.H``}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?R.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?R.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:R.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===N.A.Color?R.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:R.H``}
      }
    `)),t.include(p.s,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},26714:function(e,t,r){r.d(t,{S:function(){return _},b:function(){return p},g:function(){return v}});var n=r(8693),i=r(47001),o=r(12686),a=r(53800),s=r(9804),c=r(9674),l=r(8953),u=r(73893),d=r(65982),h=r(63914),f=r(84970);const m=16;function p(){const e=new h.kG,t=e.fragment;return e.include(a.k),t.include(s.S),e.include(c.G),t.uniforms.add(new u.p("radius",((e,t)=>v(t.camera)))),t.code.add(d.H`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),t.code.add(d.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add([new l.A("nearFar",((e,t)=>t.camera.nearFar)),new f.A("normalMap",(e=>e.normalTexture)),new f.A("depthMap",(e=>e.depthTexture)),new l.A("zScale",((e,t)=>(0,c.R)(t))),new u.p("projScale",(e=>e.projScale)),new f.A("rnm",(e=>e.noiseTexture)),new l.A("rnmScale",((e,t)=>(0,i.s)(g,t.camera.fullWidth/(0,n.Wg)(e.noiseTexture).descriptor.width,t.camera.fullHeight/(0,n.Wg)(e.noiseTexture).descriptor.height))),new u.p("intensity",(e=>e.intensity)),new l.A("screenSize",((e,t)=>(0,i.s)(g,t.camera.fullWidth,t.camera.fullHeight)))]),t.code.add(d.H`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${d.H.int(m)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${d.H.int(m)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),e}function v(e){return Math.max(10,20*e.computeRenderPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const g=(0,o.a)(),_=Object.freeze(Object.defineProperty({__proto__:null,build:p,getRadius:v},Symbol.toStringTag,{value:"Module"}))},14434:function(e,t,r){r.d(t,{S:function(){return p},b:function(){return m}});var n=r(65554),i=r(53800),o=r(9804),a=r(55641),s=r(8953),c=r(73893),l=r(65982),u=r(63914),d=r(17826),h=r(84970);const f=4;function m(){const e=new u.kG,t=e.fragment;e.include(i.k);const r=(f+1)/2,m=1/(2*r*r);return t.include(o.S),t.uniforms.add([new h.A("depthMap",(e=>e.depthTexture)),new d.R("tex",(e=>e.colorTexture)),new a.q("blurSize",(e=>e.blurSize)),new c.p("projScale",((e,t)=>{const r=(0,n.i)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new s.A("nearFar",((e,t)=>t.camera.nearFar))]),t.code.add(l.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${l.H.float(m)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.code.add(l.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${l.H.int(f)}; r <= ${l.H.int(f)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),e}const p=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},26114:function(e,t,r){r.d(t,{a:function(){return a},c:function(){return n},f:function(){return o}});r(23767),r(8585),r(68696);function n(){return[1,0,0,0,1,0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function o(e,t,r,n,i,o,a,s,c){return[e,t,r,n,i,o,a,s,c]}function a(e,t){return new Float64Array(e,t,9)}Object.freeze(Object.defineProperty({__proto__:null,clone:i,create:n,createView:a,fromValues:o},Symbol.toStringTag,{value:"Module"}))},94370:function(e,t,r){r.d(t,{I:function(){return s},a:function(){return a},b:function(){return i},c:function(){return n}});r(23767),r(8585),r(68696);function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t,r,n,i,o,a,s,c,l,u,d,h,f,m,p){return[e,t,r,n,i,o,a,s,c,l,u,d,h,f,m,p]}function a(e,t){return new Float64Array(e,t,16)}const s=n();Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:i,create:n,createView:a,fromValues:o},Symbol.toStringTag,{value:"Module"}))},44420:function(e,t,r){r.d(t,{c:function(){return T},g:function(){return d},j:function(){return D},k:function(){return S},m:function(){return h},s:function(){return u}});var n=r(26114),i=r(45263),o=r(74674),a=r(73288),s=r(65554),c=r(97848);function l(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function u(e,t,r){r*=.5;const n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function d(e,t){const r=2*Math.acos(t[3]),n=Math.sin(r/2);return n>(0,a.g)()?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function h(e,t,r){const n=t[0],i=t[1],o=t[2],a=t[3],s=r[0],c=r[1],l=r[2],u=r[3];return e[0]=n*u+a*s+i*l-o*c,e[1]=i*u+a*c+o*s-n*l,e[2]=o*u+a*l+n*c-i*s,e[3]=a*u-n*s-i*c-o*l,e}function f(e,t,r){r*=.5;const n=t[0],i=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=n*c+a*s,e[1]=i*c+o*s,e[2]=o*c-i*s,e[3]=a*c-n*s,e}function m(e,t,r){r*=.5;const n=t[0],i=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=n*c-o*s,e[1]=i*c+a*s,e[2]=o*c+n*s,e[3]=a*c-i*s,e}function p(e,t,r){r*=.5;const n=t[0],i=t[1],o=t[2],a=t[3],s=Math.sin(r),c=Math.cos(r);return e[0]=n*c+i*s,e[1]=i*c-n*s,e[2]=o*c+a*s,e[3]=a*c-o*s,e}function v(e,t){const r=t[0],n=t[1],i=t[2];return e[0]=r,e[1]=n,e[2]=i,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-i*i)),e}function g(e,t,r,n){const i=t[0],o=t[1],s=t[2],c=t[3];let l,u,d,h,f,m=r[0],p=r[1],v=r[2],g=r[3];return u=i*m+o*p+s*v+c*g,u<0&&(u=-u,m=-m,p=-p,v=-v,g=-g),1-u>(0,a.g)()?(l=Math.acos(u),d=Math.sin(l),h=Math.sin((1-n)*l)/d,f=Math.sin(n*l)/d):(h=1-n,f=n),e[0]=h*i+f*m,e[1]=h*o+f*p,e[2]=h*s+f*v,e[3]=h*c+f*g,e}function _(e){const t=a.R,r=t(),n=t(),i=t(),o=Math.sqrt(1-r),s=Math.sqrt(r);return e[0]=o*Math.sin(2*Math.PI*n),e[1]=o*Math.cos(2*Math.PI*n),e[2]=s*Math.sin(2*Math.PI*i),e[3]=s*Math.cos(2*Math.PI*i),e}function x(e,t){const r=t[0],n=t[1],i=t[2],o=t[3],a=r*r+n*n+i*i+o*o,s=a?1/a:0;return e[0]=-r*s,e[1]=-n*s,e[2]=-i*s,e[3]=o*s,e}function T(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function b(e,t){const r=t[0]+t[4]+t[8];let n;if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const i=(r+1)%3,o=(r+2)%3;n=Math.sqrt(t[3*r+r]-t[3*i+i]-t[3*o+o]+1),e[r]=.5*n,n=.5/n,e[3]=(t[3*i+o]-t[3*o+i])*n,e[i]=(t[3*i+r]+t[3*r+i])*n,e[o]=(t[3*o+r]+t[3*r+o])*n}return e}function S(e,t,r,n){const i=.5*Math.PI/180;t*=i,r*=i,n*=i;const o=Math.sin(t),a=Math.cos(t),s=Math.sin(r),c=Math.cos(r),l=Math.sin(n),u=Math.cos(n);return e[0]=o*c*u-a*s*l,e[1]=a*s*u+o*c*l,e[2]=a*c*l-o*s*u,e[3]=a*c*u+o*s*l,e}function A(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}const y=c.c,w=c.s,C=c.a,M=h,O=c.b,P=c.d,I=c.l,R=c.e,E=R,L=c.f,N=L,H=c.n,D=c.g,F=c.h;function z(e,t,r){const n=(0,s.e)(t,r);return n<-.999999?((0,s.f)(B,V,t),(0,s.u)(B)<1e-6&&(0,s.f)(B,U,t),(0,s.n)(B,B),u(e,B,Math.PI),e):n>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,s.f)(B,t,r),e[0]=B[0],e[1]=B[1],e[2]=B[2],e[3]=1+n,H(e,e))}const B=(0,o.c)(),V=(0,o.f)(1,0,0),U=(0,o.f)(0,1,0);function G(e,t,r,n,i,o){return g(W,t,i,o),g($,r,n,o),g(e,W,$,2*o*(1-o)),e}const W=(0,i.a)(),$=(0,i.a)();function k(e,t,r,n){const i=j;return i[0]=r[0],i[3]=r[1],i[6]=r[2],i[1]=n[0],i[4]=n[1],i[7]=n[2],i[2]=-t[0],i[5]=-t[1],i[8]=-t[2],H(e,b(e,i))}const j=(0,n.c)();Object.freeze(Object.defineProperty({__proto__:null,add:C,calculateW:v,conjugate:T,copy:y,dot:P,equals:F,exactEquals:D,fromEuler:S,fromMat3:b,getAxisAngle:d,identity:l,invert:x,len:E,length:R,lerp:I,mul:M,multiply:h,normalize:H,random:_,rotateX:f,rotateY:m,rotateZ:p,rotationTo:z,scale:O,set:w,setAxes:k,setAxisAngle:u,slerp:g,sqlerp:G,sqrLen:N,squaredLength:L,str:A},Symbol.toStringTag,{value:"Module"}))},45263:function(e,t,r){r.d(t,{I:function(){return s},a:function(){return n},b:function(){return i},c:function(){return a}});r(23767),r(8585),r(68696);function n(){return[0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3]]}function o(e,t,r,n){return[e,t,r,n]}function a(e,t){return new Float64Array(e,t,4)}const s=n();Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:i,create:n,createView:a,fromValues:o},Symbol.toStringTag,{value:"Module"}))},99133:function(e,t,r){r.d(t,{a:function(){return b},c:function(){return p},g:function(){return S},h:function(){return v},j:function(){return O},m:function(){return B}});r(81653);var n,i=r(93622),o=r(67752),a=r(8693),s=r(51802),c=r(65554),l=r(74674),u=r(97848),d=r(85381);!function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(n||(n={}));var h=r(23573),f=r(94377),m=r(62069);function p(){return(0,d.c)()}function v(e,t=p()){return(0,u.c)(t,e)}function g(e,t){return(0,d.f)(e[0],e[1],e[2],t)}function _(e){return e}function x(e){e[0]=e[1]=e[2]=e[3]=0}function T(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e}function b(e){return e[3]}function S(e){return e}function A(e,t,r,n){return(0,d.f)(e,t,r,n)}function y(e,t,r){return e!==r&&(0,c.c)(r,e),r[3]=e[3]+t,r}function w(e,t,r){return i.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),e===r?r:v(e,r)}function C(e,t,r){if((0,a.Wi)(t))return!1;const{origin:n,direction:i}=t,o=M;o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2];const s=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===s)return!1;const c=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),l=c*c-4*s*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(l<0)return!1;const u=Math.sqrt(l);let d=(-c-u)/(2*s);const h=(-c+u)/(2*s);return(d<0||h<d&&h>0)&&(d=h),!(d<0)&&(r&&(r[0]=n[0]+i[0]*d,r[1]=n[1]+i[1]*d,r[2]=n[2]+i[2]*d),!0)}const M=(0,l.c)();function O(e,t){return C(e,t,null)}function P(e,t,r){if(C(e,t,r))return r;const n=I(e,t,m.WM.get());return(0,c.a)(r,t.origin,(0,c.g)(m.WM.get(),t.direction,(0,c.i)(t.origin,n)/(0,c.l)(t.direction))),r}function I(e,t,r){const n=m.WM.get(),i=m.MP.get();(0,c.f)(n,t.origin,t.direction);const o=b(e);(0,c.f)(r,n,t.origin),(0,c.g)(r,r,1/(0,c.l)(r)*o);const a=N(e,t.origin),l=(0,f.EU)(t.origin,r);return(0,s.d)(i,l+a,n),(0,c.m)(r,r,i),r}function R(e,t,r){return C(e,t,r)?r:((0,h.JI)(t,S(e),r),E(e,r,r))}function E(e,t,r){const n=(0,c.b)(m.WM.get(),t,S(e)),i=(0,c.g)(m.WM.get(),n,e[3]/(0,c.l)(n));return(0,c.a)(r,i,S(e))}function L(e,t){const r=(0,c.b)(m.WM.get(),t,S(e)),n=(0,c.p)(r),i=e[3]*e[3];return Math.sqrt(Math.abs(n-i))}function N(e,t){const r=(0,c.b)(m.WM.get(),t,S(e)),n=(0,c.l)(r),i=b(e),a=i+Math.abs(i-n);return(0,o.ZF)(i/a)}const H=(0,l.c)();function D(e,t,r,i){const a=(0,c.b)(H,t,S(e));switch(r){case n.X:{const e=(0,o.jE)(a,H)[2];return(0,c.s)(i,-Math.sin(e),Math.cos(e),0)}case n.Y:{const e=(0,o.jE)(a,H),t=e[1],r=e[2],n=Math.sin(t);return(0,c.s)(i,-n*Math.cos(r),-n*Math.sin(r),Math.cos(t))}case n.Z:return(0,c.n)(i,a);default:return}}function F(e,t){const r=(0,c.b)(V,t,S(e));return(0,c.l)(r)-e[3]}function z(e,t,r,i){const o=F(e,t),a=D(e,t,n.Z,V),s=(0,c.g)(V,a,r-o);return(0,c.a)(i,t,s)}function B(e,t){const r=(0,c.d)(S(e),t),n=b(e);return r<=n*n}const V=(0,l.c)(),U=p();Object.freeze(Object.defineProperty({__proto__:null,altitudeAt:F,angleToSilhouette:N,axisAt:D,clear:x,closestPoint:R,closestPointOnSilhouette:I,containsPoint:B,copy:v,create:p,distanceToSilhouette:L,elevate:y,fromCenterAndRadius:g,fromRadius:T,fromValues:A,getCenter:S,getRadius:b,intersectRay:C,intersectRayClosestSilhouette:P,intersectsRay:O,projectPoint:E,setAltitudeAt:z,setExtent:w,tmpSphere:U,wrap:_},Symbol.toStringTag,{value:"Module"}))},84121:function(e,t,r){r.d(t,{a:function(){return o},b:function(){return c},n:function(){return s},s:function(){return a},t:function(){return i}});var n=r(49448);function i(e,t,r){if(e.count!==t.count)return void n.c.error("source and destination buffers need to have the same number of elements");const i=e.count,o=r[0],a=r[1],s=r[2],c=r[4],l=r[5],u=r[6],d=r[8],h=r[9],f=r[10],m=r[12],p=r[13],v=r[14],g=e.typedBuffer,_=e.typedBufferStride,x=t.typedBuffer,T=t.typedBufferStride;for(let n=0;n<i;n++){const e=n*_,t=n*T,r=x[t],i=x[t+1],b=x[t+2];g[e]=o*r+c*i+d*b+m,g[e+1]=a*r+l*i+h*b+p,g[e+2]=s*r+u*i+f*b+v}}function o(e,t,r){if(e.count!==t.count)return void n.c.error("source and destination buffers need to have the same number of elements");const i=e.count,o=r[0],a=r[1],s=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,v=t.typedBuffer,g=t.typedBufferStride;for(let n=0;n<i;n++){const e=n*p,t=n*g,r=v[t],i=v[t+1],_=v[t+2];m[e]=o*r+c*i+d*_,m[e+1]=a*r+l*i+h*_,m[e+2]=s*r+u*i+f*_}}function a(e,t,r){const n=Math.min(e.count,t.count),i=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<n;c++){const e=c*o,t=c*s;i[e]=r*a[t],i[e+1]=r*a[t+1],i[e+2]=r*a[t+2]}}function s(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,i=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride;for(let s=0;s<r;s++){const e=s*i,t=s*a,r=o[t],c=o[t+1],l=o[t+2],u=r*r+c*c+l*l;if(u>0){const t=1/Math.sqrt(u);n[e]=t*r,n[e+1]=t*c,n[e+2]=t*l}}}function c(e,t,r){const n=Math.min(e.count,t.count),i=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<n;c++){const e=c*o,t=c*s;i[e]=a[t]>>r,i[e+1]=a[t+1]>>r,i[e+2]=a[t+2]>>r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:s,scale:a,shiftRight:c,transformMat3:o,transformMat4:i},Symbol.toStringTag,{value:"Module"}))},34305:function(e,t,r){function n(e,t,r){const n=e.typedBuffer,i=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u)n[c]=o[l],n[c+1]=o[l+1],n[c+2]=o[l+2],c+=i,l+=a}function i(e,t,r,n,i){const o=e.typedBuffer,a=e.typedBufferStride,s=i?.count??e.count;let c=(i?.dstIndex??0)*a;for(let l=0;l<s;++l)o[c]=t,o[c+1]=r,o[c+2]=n,c+=a}r.d(t,{c:function(){return n},f:function(){return i}});Object.freeze(Object.defineProperty({__proto__:null,copy:n,fill:i},Symbol.toStringTag,{value:"Module"}))},64680:function(e,t,r){r.d(t,{b:function(){return i},c:function(){return n},f:function(){return o}});r(23767),r(8585),r(68696);function n(){return new Float32Array(3)}function i(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function o(e,t,r){const n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}function a(e,t){return new Float32Array(e,t,3)}function s(){return n()}function c(){return o(1,1,1)}function l(){return o(1,0,0)}function u(){return o(0,1,0)}function d(){return o(0,0,1)}const h=s(),f=c(),m=l(),p=u(),v=d();Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_X:m,UNIT_Y:p,UNIT_Z:v,ZEROS:h,clone:i,create:n,createView:a,fromValues:o,ones:c,unitX:l,unitY:u,unitZ:d,zeros:s},Symbol.toStringTag,{value:"Module"}))},39072:function(e,t,r){r.d(t,{r:function(){return n}});class n{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const n=this._outer.get(e);n?n.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},97257:function(e,t,r){r.d(t,{x:function(){return i}});r(57658);var n=r(96475);class i{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,n.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,o));e++)this._items.push(this._allocator())}}const o=1024},49448:function(e,t,r){r.d(t,{c:function(){return i}});var n=r(93622);const i=n.Z.getLogger("esri.views.3d.support.buffer.math")},16160:function(e,t,r){r.d(t,{Ue:function(){return c},nF:function(){return u},zk:function(){return l}});var n=r(67752),i=r(97257),o=r(65554),a=r(74674),s=r(62069);function c(e){return e?{origin:(0,a.a)(e.origin),vector:(0,a.a)(e.vector)}:{origin:(0,a.c)(),vector:(0,a.c)()}}function l(e,t,r=c()){return(0,o.c)(r.origin,e),(0,o.b)(r.vector,t,e),r}function u(e,t,r){return d(e,t,0,1,r)}function d(e,t,r,i,a){const{vector:c,origin:l}=e,u=(0,o.b)(s.WM.get(),t,l),d=(0,o.e)(c,u)/(0,o.p)(c);return(0,o.g)(a,c,(0,n.uZ)(d,r,i)),(0,o.a)(a,a,e.origin)}(0,a.c)(),(0,a.c)(),new i.x((()=>c()))},23573:function(e,t,r){r.d(t,{JI:function(){return l},Ue:function(){return a},re:function(){return c}});r(15055);var n=r(97257),i=r(65554),o=r(74674);r(62069);function a(e){return e?s((0,o.a)(e.origin),(0,o.a)(e.direction)):s((0,o.c)(),(0,o.c)())}function s(e,t){return{origin:e,direction:t}}function c(e,t){const r=u.get();return r.origin=e,r.direction=t,r}function l(e,t,r){const n=(0,i.e)(e.direction,(0,i.b)(r,t,e.origin));return(0,i.a)(r,e.origin,(0,i.g)(r,e.direction,n)),r}const u=new n.x((()=>a()))},94377:function(e,t,r){r.d(t,{EU:function(){return a}});var n=r(67752),i=r(65554),o=r(74674);function a(e,t){const r=(0,i.e)(e,t)/((0,i.l)(e)*(0,i.l)(t));return-(0,n.ZF)(r)}(0,o.c)(),(0,o.c)()},62069:function(e,t,r){r.d(t,{MP:function(){return m},WM:function(){return f}});r(57658);var n=r(37484),i=r(96475),o=r(26114),a=r(94370),s=r(45263),c=r(12686),l=r(74674),u=r(85381);class d{constructor(e,t,r){this._itemByteSize=e,this._itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(r/this._itemByteSize)}get(){0===this._itemsPtr&&(0,i.Y)((()=>this._reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const e=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let t=0;t<this._itemsPerBuffer;++t)this._items.push(this._itemCreate(e,t*this._itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=h){return new d(16,c.c,e)}static createVec3f64(e=h){return new d(24,l.b,e)}static createVec4f64(e=h){return new d(32,u.a,e)}static createMat3f64(e=h){return new d(72,o.a,e)}static createMat4f64(e=h){return new d(128,a.a,e)}static createQuatf64(e=h){return new d(32,s.c,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const h=4*n.Y8.KILOBYTES,f=(d.createVec2f64(),d.createVec3f64()),m=(d.createVec4f64(),d.createMat3f64(),d.createMat4f64());d.createQuatf64()},50740:function(e,t,r){r.d(t,{t:function(){return i}});var n=r(94848);async function i(e,t){const{data:r}=await(0,n["default"])(e,{responseType:"image",...t});return r}},86664:function(e,t,r){r.r(t),r.d(t,{fetch:function(){return jr},gltfToEngineResources:function(){return Jr},parseUrl:function(){return qr}});r(57658);var n=r(98203),i=r(8693),o=r(18037),a=r(26114),s=r(51802),c=r(94370),l=r(65554),u=r(74674),d=r(37740),h=r(76180),f=r(84121),m=r(46510),p=r(5434),v=r(65470),g=r(56023),_=r(52709),x=r(92452),T=r(57409),b=r(20282);function S(e){if((0,i.Wi)(e))return null;const t=(0,i.pC)(e.offset)?e.offset:b.Z,r=(0,i.pC)(e.rotation)?e.rotation:0,n=(0,i.pC)(e.scale)?e.scale:b.O,a=(0,T.f)(1,0,0,0,1,0,t[0],t[1],1),s=(0,T.f)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),c=(0,T.f)(n[0],0,0,0,n[1],0,0,0,1),l=(0,T.c)();return(0,o.m)(l,s,c),(0,o.m)(l,a,l),l}class A{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class y{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new A,this.numberOfVertices=0}}var w=r(94848),C=r(49724),M=r(37484),O=r(22130),P=r(93622),I=r(39072),R=r(92454),E=r(86201),L=r(50740),N=r(66758),H=r(81789),D=(r(23767),r(8585),r(68696),r(928));function F(e){if(e.length<D.DB)return Array.from(e);if(Array.isArray(e))return Float64Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return Uint16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}var z=r(88071),B=r(54131);class V{constructor(e,t,r,n){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=n,this._children=void 0,(0,B.hu)(e.length>=1),(0,B.hu)(r.length%this._numIndexPerPrimitive==0),(0,B.hu)(r.length>=e.length*this._numIndexPerPrimitive),(0,B.hu)(3===n.size||4===n.size);const{data:i,size:o}=n,a=e.length;let s=o*r[this._numIndexPerPrimitive*e[0]];U.clear(),U.push(s);const c=(0,u.f)(i[s],i[s+1],i[s+2]),d=(0,u.a)(c);for(let l=0;l<a;++l){const t=this._numIndexPerPrimitive*e[l];for(let e=0;e<this._numIndexPerPrimitive;++e){s=o*r[t+e],U.push(s);let n=i[s];c[0]=Math.min(n,c[0]),d[0]=Math.max(n,d[0]),n=i[s+1],c[1]=Math.min(n,c[1]),d[1]=Math.max(n,d[1]),n=i[s+2],c[2]=Math.min(n,c[2]),d[2]=Math.max(n,d[2])}}this.bbMin=c,this.bbMax=d;const h=(0,l.h)((0,u.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(d[0]-c[0],d[1]-c[1]),d[2]-c[2]);let f=this.radius*this.radius;for(let l=0;l<U.length;++l){s=U.getItemAt(l);const e=i[s]-h[0],t=i[s+1]-h[1],r=i[s+2]-h[2],n=e*e+t*t+r*r;if(n<=f)continue;const o=Math.sqrt(n),a=.5*(o-this.radius);this.radius=this.radius+a,f=this.radius*this.radius;const c=a/o;h[0]+=e*c,h[1]+=t*c,h[2]+=r*c}this.center=h,U.clear()}getChildren(){if(this._children||(0,l.d)(this.bbMin,this.bbMax)<=1)return this._children;const e=(0,l.h)((0,u.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),n=new Array(8);for(let c=0;c<8;++c)n[c]=0;const{data:i,size:o}=this.position;for(let c=0;c<t;++c){let t=0;const a=this._numIndexPerPrimitive*this.primitiveIndices[c];let s=o*this.indices[a],l=i[s],u=i[s+1],d=i[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=o*this.indices[a+e];const t=i[s],r=i[s+1],n=i[s+2];t<l&&(l=t),r<u&&(u=r),n<d&&(d=n)}l<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),r[c]=t,++n[t]}let a=0;for(let c=0;c<8;++c)n[c]>0&&++a;if(a<2)return;const s=new Array(8);for(let c=0;c<8;++c)s[c]=n[c]>0?new Uint32Array(n[c]):void 0;for(let c=0;c<8;++c)n[c]=0;for(let c=0;c<t;++c){const e=r[c];s[e][n[e]++]=this.primitiveIndices[c]}this._children=new Array;for(let c=0;c<8;++c)void 0!==s[c]&&this._children.push(new V(s[c],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){U.prune()}}const U=new z.Z({deallocator:null});var G=r(48369),W=r(30505),$=r(97257),k=r(16160);r(62069);function j(e){return e?{p0:(0,u.a)(e.p0),p1:(0,u.a)(e.p1),p2:(0,u.a)(e.p2)}:{p0:(0,u.c)(),p1:(0,u.c)(),p2:(0,u.c)()}}function q(e,t,r){return(0,l.b)(J,t,e),(0,l.b)(X,r,e),(0,l.l)((0,l.f)(J,J,X))/2}new $.x(k.Ue),new $.x((()=>j()));const J=(0,u.c)(),X=(0,u.c)();function K(e,t,r){if(!e||!t)return!1;const{size:n,data:i}=e;(0,l.s)(r,0,0,0),(0,l.s)(re,0,0,0);let o=0,a=0;for(let s=0;s<t.length-2;s+=3){const e=t[s+0]*n,c=t[s+1]*n,u=t[s+2]*n;(0,l.s)(Q,i[e+0],i[e+1],i[e+2]),(0,l.s)(ee,i[c+0],i[c+1],i[c+2]),(0,l.s)(te,i[u+0],i[u+1],i[u+2]);const d=q(Q,ee,te);d?((0,l.a)(Q,Q,ee),(0,l.a)(Q,Q,te),(0,l.g)(Q,Q,1/3*d),(0,l.a)(r,r,Q),o+=d):((0,l.a)(re,re,Q),(0,l.a)(re,re,ee),(0,l.a)(re,re,te),a+=3)}return(0!==a||0!==o)&&(0!==o?((0,l.g)(r,r,1/o),!0):0!==a&&((0,l.g)(r,re,1/a),!0))}function Y(e,t,r){if(!e||!t)return!1;const{size:n,data:i}=e;(0,l.s)(r,0,0,0);let o=-1,a=0;for(let s=0;s<t.length;s++){const e=t[s]*n;o!==e&&(r[0]+=i[e+0],r[1]+=i[e+1],r[2]+=i[e+2],a++),o=e}return a>1&&(0,l.g)(r,r,1/a),a>0}function Z(e,t,r,n){if(!e)return!1;(0,l.s)(n,0,0,0),(0,l.s)(re,0,0,0);let i=0,o=0;const{size:a,data:s}=e,c=t?t.length-1:s.length/a-1,u=c+(r?2:0);for(let d=0;d<u;d+=2){const e=d<c?d:c,r=d<c?d+1:0,u=(t?t[e]:e)*a,h=(t?t[r]:r)*a;Q[0]=s[u],Q[1]=s[u+1],Q[2]=s[u+2],ee[0]=s[h],ee[1]=s[h+1],ee[2]=s[h+2],(0,l.g)(Q,(0,l.a)(Q,Q,ee),.5);const f=(0,l.j)(Q,ee);f>0?((0,l.a)(n,n,(0,l.g)(Q,Q,f)),i+=f):0===i&&((0,l.a)(re,re,Q),o++)}return 0!==i?((0,l.g)(n,n,1/i),!0):0!==o&&((0,l.g)(n,re,1/o),!0)}const Q=(0,u.c)(),ee=(0,u.c)(),te=(0,u.c)(),re=(0,u.c)();var ne=r(66795),ie=r(24586);class oe{constructor(e){this.channel=e,this.id=(0,ie.D)()}}var ae=r(30150);r(12470);function se(e,t){return(0,i.Wi)(e)&&(e=[]),e.push(t),e}function ce(e,t){if((0,i.Wi)(e))return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(0,u.c)(),new Float32Array(6);class le extends G.c{constructor(e,t,r=[],n=null,i=W.U.Mesh,o=null,a=-1){super(),this.material=e,this.mapPositions=n,this.type=i,this.objectAndLayerIdColor=o,this.edgeIndicesLength=a,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[s,c]of t)c&&this._vertexAttributes.set(s,{...c});if(null==r||0===r.length){const e=ue(this._vertexAttributes),t=(0,ne.p)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[s,c]of r)c&&(this._indices.set(s,(0,ne.mi)(c)),s===ae.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(s).length:this.edgeIndicesLength))}instantiate(e={}){const t=new le(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach(((e,r)=>{e.exclusive=!1,t._vertexAttributes.set(r,e)})),this._indices.forEach(((e,r)=>t._indices.set(r,e))),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:F(t.data)},this._vertexAttributes.set(e,t)),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,i.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===W.U.Mesh?this._computeAttachmentOriginTriangles(e):this.type===W.U.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&((0,i.pC)(this._transformation)&&(0,l.m)(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(ae.T.POSITION),r=this.vertexAttributes.get(ae.T.POSITION);return K(r,t,e)}_computeAttachmentOriginLines(e){const t=this.vertexAttributes.get(ae.T.POSITION),r=this.indices.get(ae.T.POSITION);return Z(t,r,r&&de(this.material.parameters,t,r),e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(ae.T.POSITION),r=this.vertexAttributes.get(ae.T.POSITION);return Y(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(ae.T.POSITION),t=this.vertexAttributes.get(ae.T.POSITION);if(!e||0===e.length||!t)return null;const r=this.type===W.U.Mesh?3:1;(0,B.hu)(e.length%r==0,"Indexing error: "+e.length+" not divisible by "+r);const n=(0,ne.p)(e.length/r);return new V(n,r,e,t)}get transformation(){return(0,i.Pt)(this._transformation,c.I)}set transformation(e){this._transformation=e&&e!==c.I?(0,c.b)(e):null}get shaderTransformation(){return(0,i.pC)(this._shaderTransformer)?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return(0,i.pC)(this._shaderTransformer)}addHighlight(){const e=new oe(H.V_.Highlight);return this.highlights=se(this.highlights,e),e}removeHighlight(e){this.highlights=ce(this.highlights,e)}}function ue(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}function de(e,t,r){return!(!("isClosed"in e)||!e.isClosed)&&(r?r.length>2:t.data.length>6)}var he=r(56616),fe=r(96545),me=r(67752),pe=r(99659),ve=r(52430),ge=r(85381),_e=r(53800),xe=r(87035),Te=r(65982),be=r(63914),Se=r(84970);class Ae extends Te.K{constructor(){super(...arguments),this.color=(0,ge.f)(1,1,1,1)}}function ye(){const e=new be.kG;return e.include(_e.k),e.fragment.uniforms.add([new Se.A("tex",(e=>e.texture)),new xe.N("uColor",(e=>e.color))]),e.fragment.code.add(Te.H`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Ae,build:ye},Symbol.toStringTag,{value:"Module"}));var we=r(27123);function Ce(){if((0,i.Wi)(Me)){const e=e=>(0,we.V)(`esri/libs/basisu/${e}`);Me=r.e(1900).then(r.bind(r,51900)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return Me}let Me;var Oe;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(Oe||(Oe={}));var Pe=r(17923),Ie=r(29964),Re=r(33900);let Ee=null,Le=null;async function Ne(){return(0,i.Wi)(Le)&&(Le=Ce(),Ee=await Le),Le}function He(e,t){if((0,i.Wi)(Ee))return e.byteLength;const r=new Ee.BasisFile(new Uint8Array(e)),n=ze(r)?Fe(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),n}function De(e,t){if((0,i.Wi)(Ee))return e.byteLength;const r=new Ee.KTX2File(new Uint8Array(e)),n=Be(r)?Fe(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),n}function Fe(e,t,r,n,i){const o=(0,Re.RG)(t?Pe.q_.COMPRESSED_RGBA8_ETC2_EAC:Pe.q_.COMPRESSED_RGB8_ETC2),a=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*n*o*a)}function ze(e){return e.getNumImages()>=1&&!e.isUASTC()}function Be(e){return e.getFaces()>=1&&e.isETC1S()}async function Ve(e,t,r){(0,i.Wi)(Ee)&&(Ee=await Ne());const n=new Ee.BasisFile(new Uint8Array(r));if(!ze(n))return null;n.startTranscoding();const o=Ge(e,t,n.getNumLevels(0),n.getHasAlpha(),n.getImageWidth(0,0),n.getImageHeight(0,0),((e,t)=>n.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>n.transcodeImage(r,0,e,t,0,0)));return n.close(),n.delete(),o}async function Ue(e,t,r){(0,i.Wi)(Ee)&&(Ee=await Ne());const n=new Ee.KTX2File(new Uint8Array(r));if(!Be(n))return null;n.startTranscoding();const o=Ge(e,t,n.getLevels(),n.getHasAlpha(),n.getWidth(),n.getHeight(),((e,t)=>n.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>n.transcodeImage(r,e,0,0,t,0,-1,-1)));return n.close(),n.delete(),o}function Ge(e,t,r,n,i,o,a,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=e.capabilities,[u,d]=c?n?[Oe.ETC2_RGBA,Pe.q_.COMPRESSED_RGBA8_ETC2_EAC]:[Oe.ETC1_RGB,Pe.q_.COMPRESSED_RGB8_ETC2]:l?n?[Oe.BC3_RGBA,Pe.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Oe.BC1_RGB,Pe.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Oe.RGBA32,Pe.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),f=[];for(let g=0;g<h;g++)f.push(new Uint8Array(a(g,u))),s(g,u,f[g]);const m=f.length>1,p=m?Pe.cw.LINEAR_MIPMAP_LINEAR:Pe.cw.LINEAR,v={...t,samplingMode:p,hasMipmap:m,internalFormat:d,width:i,height:o};return new Ie.x(e,v,{type:"compressed",levels:f})}const We=P.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),$e=542327876,ke=131072,je=4;function qe(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function Je(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const Xe=qe("DXT1"),Ke=qe("DXT3"),Ye=qe("DXT5"),Ze=31,Qe=0,et=1,tt=2,rt=3,nt=4,it=7,ot=20,at=21;function st(e,t,r){const{textureData:n,internalFormat:o,width:a,height:s}=(0,i.s3)(ct(r,t.hasMipmap??!1));return t.samplingMode=n.levels.length>1?Pe.cw.LINEAR_MIPMAP_LINEAR:Pe.cw.LINEAR,t.hasMipmap=n.levels.length>1,t.internalFormat=o,t.width=a,t.height=s,new Ie.x(e,t,n)}function ct(e,t){const r=new Int32Array(e,0,Ze);if(r[Qe]!==$e)return We.error("Invalid magic number in DDS header"),null;if(!(r[ot]&je))return We.error("Unsupported format, must contain a FourCC code"),null;const n=r[at];let i,o;switch(n){case Xe:i=8,o=Pe.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Ke:i=16,o=Pe.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ye:i=16,o=Pe.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return We.error("Unsupported FourCC code:",Je(n)),null}let a=1,s=r[nt],c=r[rt];0==(3&s)&&0==(3&c)||(We.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,u=c;let d,h;r[tt]&ke&&!1!==t&&(a=Math.max(1,r[it])),1===a||(0,me.wt)(s)&&(0,me.wt)(c)||(We.warn("Ignoring mipmaps of non power of two sized compressed texture."),a=1);let f=r[et]+4;const m=[];for(let p=0;p<a;++p)h=(s+3>>2)*(c+3>>2)*i,d=new Uint8Array(e,f,h),m.push(d),f+=h,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:m},internalFormat:o,width:l,height:u}}var lt,ut=r(98786),dt=r(24522),ht=r(98473);class ft extends G.c{constructor(e,t){super(),this._data=e,this.type=W.U.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new fe.Z,this._passParameters=new Ae,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Pe.e8.REPEAT,t:Pe.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||H.CE.STRETCH,this.estimatedTexMemRequired=ft._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;(0,i.Wi)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,pe.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,pe.HK)(e.src)||(0,pe.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if((0,i.Wi)(e))return 0;if((0,D.eP)(e)||(0,D.lq)(e))return t.encoding===H.Ti.KTX2_ENCODING?De(e,!!t.mipmap):t.encoding===H.Ti.BASIS_ENCODING?He(e,!!t.mipmap):e.byteLength;const{width:r,height:n}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?ft._getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*n*(t.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:Pe.No.TEXTURE_2D,pixelFormat:Pe.VI.RGBA,dataType:Pe.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?Pe.cw.LINEAR_MIPMAP_LINEAR:Pe.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,t){if((0,i.pC)(this._glTexture))return this._glTexture;if((0,i.pC)(this._loadingPromise))return this._loadingPromise;const r=this._data;return(0,i.Wi)(r)?(this._glTexture=new Ie.x(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof r?this._loadFromURL(e,t,r):r instanceof Image?this._loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,t):((0,D.eP)(r)||(0,D.lq)(r))&&this.params.encoding===H.Ti.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,r)):((0,D.eP)(r)||(0,D.lq)(r))&&this.params.encoding===H.Ti.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,r)):((0,D.eP)(r)||(0,D.lq)(r))&&this.params.encoding===H.Ti.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,r)):(0,D.lq)(r)?this._loadFromPixelData(e,r):(0,D.eP)(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this._data instanceof HTMLVideoElement)||(0,i.Wi)(this._glTexture))return r;if(this._data.readyState<lt.HAVE_CURRENT_DATA||r===this._data.currentTime)return r;if((0,i.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:n,sourceTexture:i}=this._powerOfTwoStretchInfo;i.setData(this._data),this._drawStretchedTexture(e,t,r,n,i,this._glTexture)}else{const{videoWidth:e,videoHeight:t}=this._data,{width:r,height:n}=this._glTexture.descriptor;e!==r||t!==n?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,n),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,t){return this._glTexture=st(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>Ue(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>Ve(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,B.hu)(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.params.components?Pe.VI.LUMINANCE:3===this.params.components?Pe.VI.RGB:Pe.VI.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new Ie.x(e,r,t),this._glTexture}_loadFromURL(e,t,r){return this._loadAsync((async n=>{const i=await(0,L.t)(r,{signal:n});return(0,R.k_)(n),this._loadFromImage(e,i,t)}))}_loadFromImageElement(e,t,r){return r.complete?this._loadFromImage(e,r,t):this._loadAsync((async n=>{const i=await(0,ve.fY)(r,r.src,!1,n);return(0,R.k_)(n),this._loadFromImage(e,i,t)}))}_loadFromVideoElement(e,t,r){return r.readyState>=lt.HAVE_CURRENT_DATA?this._loadFromImage(e,r,t):this._loadFromVideoElementAsync(e,t,r)}_loadFromVideoElementAsync(e,t,r){return this._loadAsync((n=>new Promise(((o,a)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),(0,i.hw)(u)},c=()=>{r.readyState>=lt.HAVE_CURRENT_DATA&&(s(),o(this._loadFromImage(e,r,t)))},l=e=>{s(),a(e||new O.Z("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const u=(0,R.fu)(n,(()=>l((0,R.zE)())))}))))}_loadFromImage(e,t,r){const n=ft._getDataDimensions(t);this.params.width=n.width,this.params.height=n.height;const i=this._createDescriptor(e);return i.pixelFormat=3===this.params.components?Pe.VI.RGB:Pe.VI.RGBA,!this._requiresPowerOfTwo(e,i)||(0,me.wt)(n.width)&&(0,me.wt)(n.height)?(i.width=n.width,i.height=n.height,this._glTexture=new Ie.x(e,i,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,n,i,r),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const n=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(n,n),r}_requiresPowerOfTwo(e,t){const r=Pe.e8.CLAMP_TO_EDGE,n="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return e.type===dt.zO.WEBGL1&&(t.hasMipmap||!n)}_makePowerOfTwoTexture(e,t,r,n,i){const{width:o,height:a}=r,s=(0,me.Sf)(o),c=(0,me.Sf)(a);let l;switch(n.width=s,n.height=c,this.params.powerOfTwoResizeMode){case H.CE.PAD:n.textureCoordinateScaleFactor=[o/s,a/c],l=new Ie.x(e,n),l.updateData(0,0,0,o,a,t);break;case H.CE.STRETCH:case null:case void 0:l=this._stretchToPowerOfTwo(e,t,n,i());break;default:(0,he.Bg)(this.params.powerOfTwoResizeMode)}return n.hasMipmap&&l.generateMipmap(),l}_stretchToPowerOfTwo(e,t,r,n){const i=new Ie.x(e,r),o=new ht.X(e,{colorTarget:Pe.Lm.TEXTURE,depthStencilTarget:Pe.OU.NONE},i),a=new Ie.x(e,{target:Pe.No.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:Pe.Br.UNSIGNED_BYTE,wrapMode:Pe.e8.CLAMP_TO_EDGE,samplingMode:Pe.cw.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=(0,ut.ow)(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,n,o,s,a,i),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:o}:(s.dispose(!0),a.dispose(),o.detachColorTexture(),o.dispose()),e.bindFramebuffer(c),i}_drawStretchedTexture(e,t,r,n,i,o){this._passParameters.texture=i,e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height),e.bindTechnique(t,this._passParameters,null),e.bindVAO(n),e.drawArrays(Pe.MX.TRIANGLE_STRIP,0,(0,Re._V)(n,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height),this._passParameters.texture=null}unload(){if((0,i.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,i.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,i.pC)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(lt||(lt={}));var mt,pt=r(81653),vt=r(53838),gt=r(96884),_t=r(96377),xt=r(59260),Tt=r(30382),bt=r(20901),St=r(40449),At=r(25749);!function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",e[e.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",e[e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=12]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=14]="HUD_MATERIAL",e[e.LABEL_MATERIAL=15]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=16]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",e[e.DRAPED_WATER=19]="DRAPED_WATER",e[e.VOXEL=20]="VOXEL",e[e.MAX_SLOTS=21]="MAX_SLOTS"}(mt||(mt={}));var yt=r(44420),wt=r(45263),Ct=r(64680),Mt=r(99133);class Ot{constructor(e=0){this.offset=e,this.tmpVertex=(0,u.c)()}applyToVertex(e,t,r){const n=e+this.localOrigin[0],i=t+this.localOrigin[1],o=r+this.localOrigin[2],a=this.offset/Math.sqrt(n*n+i*i+o*o);return this.tmpVertex[0]=e+n*a,this.tmpVertex[1]=t+i*a,this.tmpVertex[2]=r+o*a,this.tmpVertex}applyToAabb(e){for(let i=0;i<3;++i)Pt[i]=e[0+i]+this.localOrigin[i],It[i]=e[3+i]+this.localOrigin[i],Rt[i]=Pt[i];const t=this.applyToVertex(Pt[0],Pt[1],Pt[2]);for(let i=0;i<3;++i)e[i]=t[i],e[i+3]=t[i];const r=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let n=0;n<3;++n)e[n+0]=Math.min(e[n+0],r[n]),e[n+3]=Math.max(e[n+3],r[n])};for(let i=1;i<8;++i){for(let e=0;e<3;++e)Rt[e]=0==(i&1<<e)?Pt[e]:It[e];r(Rt)}let n=0;for(let i=0;i<3;++i)Pt[i]*It[i]<0&&(n|=1<<i);if(0!==n&&7!==n)for(let i=0;i<8;++i)if(0==(n&i)){for(let e=0;e<3;++e)n[e]?Rt[e]=0:Rt[e]=0!=(i&1<<e)?Pt[e]:It[e];r(Rt)}for(let i=0;i<3;++i)e[i+0]-=this.localOrigin[i],e[i+3]-=this.localOrigin[i];return e}}const Pt=(0,u.c)(),It=(0,u.c)(),Rt=(0,u.c)();class Et{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,u.c)(),this._mbs=(0,Mt.c)(),this._obb={center:(0,u.c)(),halfSize:(0,Ct.c)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const n=e,i=t,o=r+this.componentLocalOriginLength,a=this._totalOffset/Math.sqrt(n*n+i*i+o*o);return this._tmpVertex[0]=e+n*a,this._tmpVertex[1]=t+i*a,this._tmpVertex[2]=r+o*a,this._tmpVertex}applyToAabb(e){const t=e[0],r=e[1],n=e[2]+this.componentLocalOriginLength,i=e[3],o=e[4],a=e[5]+this.componentLocalOriginLength,s=t*i<0?0:Math.min(Math.abs(t),Math.abs(i)),c=r*o<0?0:Math.min(Math.abs(r),Math.abs(o)),l=n*a<0?0:Math.min(Math.abs(n),Math.abs(a)),u=Math.sqrt(s*s+c*c+l*l);if(u<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=r<0?this._totalOffset:0,e[2]-=n<0?this._totalOffset:0,e[3]+=i>0?this._totalOffset:0,e[4]+=o>0?this._totalOffset:0,e[5]+=a>0?this._totalOffset:0,e;const d=Math.max(Math.abs(t),Math.abs(i)),h=Math.max(Math.abs(r),Math.abs(o)),f=Math.max(Math.abs(n),Math.abs(a)),m=Math.sqrt(d*d+h*h+f*f),p=this._totalOffset/m,v=this._totalOffset/u;return e[0]+=t*(t>0?p:v),e[1]+=r*(r>0?p:v),e[2]+=n*(n>0?p:v),e[3]+=i*(i<0?p:v),e[4]+=o*(o<0?p:v),e[5]+=a*(a<0?p:v),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*r,this._mbs[1]=e[1]+e[1]*r,this._mbs[2]=e[2]+e[2]*r,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,r=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*r,this._obb.center[1]=t[1]+t[1]*r,this._obb.center[2]=t[2]+t[2]*r,(0,l.q)(this._obb.halfSize,e.halfSize,e.quaternion),(0,l.a)(this._obb.halfSize,this._obb.halfSize,e.center);const n=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*n,this._obb.halfSize[1]+=this._obb.halfSize[1]*n,this._obb.halfSize[2]+=this._obb.halfSize[2]*n,(0,l.b)(this._obb.halfSize,this._obb.halfSize,e.center),(0,yt.c)(Dt,e.quaternion),(0,l.q)(this._obb.halfSize,this._obb.halfSize,Dt),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}}class Lt{constructor(e=0){this.offset=e,this.sphere=(0,Mt.c)(),this.tmpVertex=(0,u.c)()}applyToVertex(e,t,r){const n=this.objectTransform.transform;let i=n[0]*e+n[4]*t+n[8]*r+n[12],o=n[1]*e+n[5]*t+n[9]*r+n[13],a=n[2]*e+n[6]*t+n[10]*r+n[14];const s=this.offset/Math.sqrt(i*i+o*o+a*a);i+=i*s,o+=o*s,a+=a*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*i+c[4]*o+c[8]*a+c[12],this.tmpVertex[1]=c[1]*i+c[5]*o+c[9]*a+c[13],this.tmpVertex[2]=c[2]*i+c[6]*o+c[10]*a+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const n=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*n,t[1]+=t[1]*n,t[2]+=t[2]*n}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}}const Nt=new Lt;function Ht(e){return(0,i.pC)(e)?(Nt.offset=e,Nt):null}new Et;new Ot;const Dt=(0,wt.a)();function Ft(e,t,r,n){const i=r.typedBuffer,o=r.typedBufferStride,a=e.length;n*=o;for(let s=0;s<a;++s){const r=2*e[s];i[n]=t[r],i[n+1]=t[r+1],n+=o}}function zt(e,t,r,n,i){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(n*=a,null==i||1===i)for(let c=0;c<s;++c){const r=3*e[c];o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],n+=a}else for(let c=0;c<s;++c){const r=3*e[c];for(let e=0;e<i;++e)o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],n+=a}}function Bt(e,t,r,n,i=1){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(n*=a,1===i)for(let c=0;c<s;++c){const r=4*e[c];o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=t[r+3],n+=a}else for(let c=0;c<s;++c){const r=4*e[c];for(let e=0;e<i;++e)o[n]=t[r],o[n+1]=t[r+1],o[n+2]=t[r+2],o[n+3]=t[r+3],n+=a}}function Vt(e,t,r,n,i,o=1){if(!r)return void zt(e,t,n,i,o);const a=n.typedBuffer,c=n.typedBufferStride,l=e.length,u=r[0],d=r[1],h=r[2],f=r[4],m=r[5],p=r[6],v=r[8],g=r[9],_=r[10],x=r[12],T=r[13],b=r[14];i*=c;let S=0,A=0,y=0;const w=(0,s.y)(r)?e=>{S=t[e]+x,A=t[e+1]+T,y=t[e+2]+b}:e=>{const r=t[e],n=t[e+1],i=t[e+2];S=u*r+f*n+v*i+x,A=d*r+m*n+g*i+T,y=h*r+p*n+_*i+b};if(1===o)for(let s=0;s<l;++s)w(3*e[s]),a[i]=S,a[i+1]=A,a[i+2]=y,i+=c;else for(let s=0;s<l;++s){w(3*e[s]);for(let e=0;e<o;++e)a[i]=S,a[i+1]=A,a[i+2]=y,i+=c}}function Ut(e,t,r,n,i,o=1){if(!r)return void zt(e,t,n,i,o);const a=r,c=n.typedBuffer,l=n.typedBufferStride,u=e.length,d=a[0],h=a[1],f=a[2],m=a[4],p=a[5],v=a[6],g=a[8],_=a[9],x=a[10],T=!(0,s.z)(a),b=1e-6,S=1-b;i*=l;let A=0,y=0,w=0;const C=(0,s.y)(a)?e=>{A=t[e],y=t[e+1],w=t[e+2]}:e=>{const r=t[e],n=t[e+1],i=t[e+2];A=d*r+m*n+g*i,y=h*r+p*n+_*i,w=f*r+v*n+x*i};if(1===o)if(T)for(let s=0;s<u;++s){C(3*e[s]);const t=A*A+y*y+w*w;if(t<S&&t>b){const e=1/Math.sqrt(t);c[i]=A*e,c[i+1]=y*e,c[i+2]=w*e}else c[i]=A,c[i+1]=y,c[i+2]=w;i+=l}else for(let s=0;s<u;++s)C(3*e[s]),c[i]=A,c[i+1]=y,c[i+2]=w,i+=l;else for(let s=0;s<u;++s){if(C(3*e[s]),T){const e=A*A+y*y+w*w;if(e<S&&e>b){const t=1/Math.sqrt(e);A*=t,y*=t,w*=t}}for(let e=0;e<o;++e)c[i]=A,c[i+1]=y,c[i+2]=w,i+=l}}function Gt(e,t,r,n,i,o=1){if(!r)return void Bt(e,t,n,i,o);const a=r,c=n.typedBuffer,l=n.typedBufferStride,u=e.length,d=a[0],h=a[1],f=a[2],m=a[4],p=a[5],v=a[6],g=a[8],_=a[9],x=a[10],T=!(0,s.z)(a),b=1e-6,S=1-b;if(i*=l,1===o)for(let s=0;s<u;++s){const r=4*e[s],n=t[r],o=t[r+1],a=t[r+2],u=t[r+3];let A=d*n+m*o+g*a,y=h*n+p*o+_*a,w=f*n+v*o+x*a;if(T){const e=A*A+y*y+w*w;if(e<S&&e>b){const t=1/Math.sqrt(e);A*=t,y*=t,w*=t}}c[i]=A,c[i+1]=y,c[i+2]=w,c[i+3]=u,i+=l}else for(let s=0;s<u;++s){const r=4*e[s],n=t[r],a=t[r+1],u=t[r+2],A=t[r+3];let y=d*n+m*a+g*u,w=h*n+p*a+_*u,C=f*n+v*a+x*u;if(T){const e=y*y+w*w+C*C;if(e<S&&e>b){const t=1/Math.sqrt(e);y*=t,w*=t,C*=t}}for(let e=0;e<o;++e)c[i]=y,c[i+1]=w,c[i+2]=C,c[i+3]=A,i+=l}}function Wt(e,t,r,n,i,o=1){const a=n.typedBuffer,s=n.typedBufferStride,c=e.length;if(i*=s,r!==t.length||4!==r)if(1!==o)if(4!==r)for(let l=0;l<c;++l){const r=3*e[l];for(let e=0;e<o;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=255,i+=s}else for(let l=0;l<c;++l){const r=4*e[l];for(let e=0;e<o;++e)a[i]=t[r],a[i+1]=t[r+1],a[i+2]=t[r+2],a[i+3]=t[r+3],i+=s}else{if(4===r){for(let r=0;r<c;++r){const n=4*e[r];a[i]=t[n],a[i+1]=t[n+1],a[i+2]=t[n+2],a[i+3]=t[n+3],i+=s}return}for(let r=0;r<c;++r){const n=3*e[r];a[i]=t[n],a[i+1]=t[n+1],a[i+2]=t[n+2],a[i+3]=255,i+=s}}else{a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3];const e=new Uint32Array(n.typedBuffer.buffer,n.start),r=s/4,l=e[i/=4];i+=r;const u=c*o;for(let t=1;t<u;++t)e[i]=l,i+=r}}function $t(e,t,r,n,i=1){const o=t.typedBuffer,a=t.typedBufferStride;if(n*=a,1===i)for(let s=0;s<r;++s)o[n]=e[0],o[n+1]=e[1],o[n+2]=e[2],o[n+3]=e[3],n+=a;else for(let s=0;s<r;++s)for(let t=0;t<i;++t)o[n]=e[0],o[n+1]=e[1],o[n+2]=e[2],o[n+3]=e[3],n+=a}function kt(e,t,r,n,o,a){for(const s of t.fieldNames){const t=e.vertexAttributes.get(s),c=e.indices.get(s);if(t&&c)switch(s){case ae.T.POSITION:{(0,B.hu)(3===t.size);const e=o.getField(s,h.ct);(0,B.hu)(!!e,`No buffer view for ${s}`),e&&Vt(c,t.data,r,e,a);break}case ae.T.NORMAL:{(0,B.hu)(3===t.size);const e=o.getField(s,h.ct);(0,B.hu)(!!e,`No buffer view for ${s}`),e&&Ut(c,t.data,n,e,a);break}case ae.T.UV0:{(0,B.hu)(2===t.size);const e=o.getField(s,h.Eu);(0,B.hu)(!!e,`No buffer view for ${s}`),e&&Ft(c,t.data,e,a);break}case ae.T.COLOR:case ae.T.SYMBOLCOLOR:{(0,B.hu)(3===t.size||4===t.size);const e=o.getField(s,h.mc);(0,B.hu)(!!e,`No buffer view for ${s}`),e&&Wt(c,t.data,t.size,e,a);break}case ae.T.TANGENT:{(0,B.hu)(4===t.size);const e=o.getField(s,h.ek);(0,B.hu)(!!e,`No buffer view for ${s}`),e&&Gt(c,t.data,n,e,a);break}case ae.T.PROFILERIGHT:case ae.T.PROFILEUP:case ae.T.PROFILEVERTEXANDNORMAL:case ae.T.FEATUREVALUE:{(0,B.hu)(4===t.size);const e=o.getField(s,h.ek);(0,B.hu)(!!e,`No buffer view for ${s}`),e&&Bt(c,t.data,e,a)}}else if(s===ae.T.OBJECTANDLAYERIDCOLOR&&(0,i.pC)(e.objectAndLayerIdColor)){const t=e.indices.get(ae.T.POSITION);if((0,B.hu)(!!t,`No buffer view for ${s}`),t){const r=t.length,n=o.getField(s,h.mc);$t(e.objectAndLayerIdColor,n,r,a)}}}}class jt{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(ae.T.POSITION).length}write(e,t,r,n,i){kt(r,this.vertexBufferLayout,e,t,n,i)}}var qt=r(47592),Jt=r(55372),Xt=r(37011),Kt=r(63281),Yt=r(50213),Zt=r(68205),Qt=r(20572),er=r(85018),tr=r(7436);Pe.wb.LESS,Pe.wb.ALWAYS;const rr={mask:255},nr={function:{func:Pe.wb.ALWAYS,ref:H.hU.OutlineVisualElementMask,mask:H.hU.OutlineVisualElementMask},operation:{fail:Pe.xS.KEEP,zFail:Pe.xS.KEEP,zPass:Pe.xS.ZERO}},ir={function:{func:Pe.wb.ALWAYS,ref:H.hU.OutlineVisualElementMask,mask:H.hU.OutlineVisualElementMask},operation:{fail:Pe.xS.KEEP,zFail:Pe.xS.KEEP,zPass:Pe.xS.REPLACE}};Pe.wb.EQUAL,H.hU.OutlineVisualElementMask,H.hU.OutlineVisualElementMask,Pe.xS.KEEP,Pe.xS.KEEP,Pe.xS.KEEP,Pe.wb.NOTEQUAL,H.hU.OutlineVisualElementMask,H.hU.OutlineVisualElementMask,Pe.xS.KEEP,Pe.xS.KEEP,Pe.xS.KEEP;var or=r(51780),ar=r(14647),sr=r(9408);class cr extends Kt.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,u.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=H.Vr.Back,this.emissiveFactor=(0,u.f)(0,0,0),this.instancedDoublePrecision=!1,this.normalType=Jt.h.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,u.f)(.2,.2,.2),this.diffuse=(0,u.f)(.8,.8,.8),this.externalColor=(0,ge.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,u.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,a.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=H.Gv.Less,this.textureAlphaMode=H.JJ.Blend,this.textureAlphaCutoff=Yt.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=St.yD.Occlude}}class lr extends Qt.A{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===dt.zO.WEBGL2,t.spherical=e.viewingMode===vt.JY.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?Xt.N.Default:Xt.N.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,lr.shader)}_initializeProgram(e,t){return new tr.$(e.rctx,t.get().build(this.configuration),er.i)}_convertDepthTestFunction(e){return e===H.Gv.Lequal?Pe.wb.LEQUAL:Pe.wb.LESS}_makePipeline(e,t){const r=this.configuration,n=e===or.A.NONE,i=e===or.A.FrontFace;return(0,sr.sm)({blending:r.output!==_t.H.Color&&r.output!==_t.H.Alpha||!r.transparent?null:n?At.wu:(0,At.j7)(e),culling:ur(r)?(0,sr.zp)(r.cullFace):null,depthTest:{func:(0,At.Bh)(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(n||i)&&r.writeDepth?sr.LZ:null,colorWrite:sr.BK,stencilWrite:r.hasOccludees?rr:null,stencilTest:r.hasOccludees?t?ir:nr:null,polygonOffset:n||i?null:(0,At.je)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function ur(e){return e.cullFace!==H.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}lr.shader=new Zt.J(ar.D,(()=>r.e(8981).then(r.bind(r,8981))));var dr=r(61445),hr=r(33274),fr=r(51313);class mr extends hr.m{constructor(){super(...arguments),this.hasWebGL2Context=!1}}(0,dr._)([(0,hr.o)({constValue:!0})],mr.prototype,"hasSliceHighlight",void 0),(0,dr._)([(0,hr.o)({constValue:!1})],mr.prototype,"hasSliceInVertexProgram",void 0),(0,dr._)([(0,hr.o)({constValue:!1})],mr.prototype,"instancedDoublePrecision",void 0),(0,dr._)([(0,hr.o)({constValue:!1})],mr.prototype,"useLegacyTerrainShading",void 0),(0,dr._)([(0,hr.o)({constValue:!1})],mr.prototype,"hasModelTransformation",void 0),(0,dr._)([(0,hr.o)({constValue:fr.P.Pass})],mr.prototype,"pbrTextureBindType",void 0),(0,dr._)([(0,hr.o)()],mr.prototype,"hasWebGL2Context",void 0);class pr extends mr{constructor(){super(...arguments),this.output=_t.H.Color,this.alphaDiscardMode=H.JJ.Opaque,this.doubleSidedMode=xt.q.None,this.pbrMode=Tt.f7.Disabled,this.cullFace=H.Vr.None,this.transparencyPassType=or.A.NONE,this.normalType=Jt.h.Attribute,this.textureCoordinateType=Xt.N.None,this.customDepthTest=H.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,dr._)([(0,hr.o)({count:_t.H.COUNT})],pr.prototype,"output",void 0),(0,dr._)([(0,hr.o)({count:H.JJ.COUNT})],pr.prototype,"alphaDiscardMode",void 0),(0,dr._)([(0,hr.o)({count:xt.q.COUNT})],pr.prototype,"doubleSidedMode",void 0),(0,dr._)([(0,hr.o)({count:Tt.f7.COUNT})],pr.prototype,"pbrMode",void 0),(0,dr._)([(0,hr.o)({count:H.Vr.COUNT})],pr.prototype,"cullFace",void 0),(0,dr._)([(0,hr.o)({count:or.A.COUNT})],pr.prototype,"transparencyPassType",void 0),(0,dr._)([(0,hr.o)({count:Jt.h.COUNT})],pr.prototype,"normalType",void 0),(0,dr._)([(0,hr.o)({count:Xt.N.COUNT})],pr.prototype,"textureCoordinateType",void 0),(0,dr._)([(0,hr.o)({count:H.Gv.COUNT})],pr.prototype,"customDepthTest",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"spherical",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasVertexColors",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasSymbolColors",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasVerticalOffset",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasSlicePlane",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasSliceHighlight",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasColorTexture",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasMetallicRoughnessTexture",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasEmissionTexture",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasOcclusionTexture",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasNormalTexture",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasScreenSizePerspective",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasVertexTangents",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasOccludees",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasMultipassTerrain",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasModelTransformation",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"offsetBackfaces",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"vvSize",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"vvColor",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"receiveShadows",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"receiveAmbientOcclusion",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"textureAlphaPremultiplied",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"instanced",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"instancedColor",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"objectAndLayerIdColorInstanced",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"instancedDoublePrecision",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"writeDepth",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"transparent",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"enableOffset",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"cullAboveGround",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"snowCover",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasColorTextureTransform",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasEmissionTextureTransform",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasNormalTextureTransform",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasOcclusionTextureTransform",void 0),(0,dr._)([(0,hr.o)()],pr.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,dr._)([(0,hr.o)({constValue:!0})],pr.prototype,"hasVvInstancing",void 0),(0,dr._)([(0,hr.o)({constValue:!1})],pr.prototype,"useCustomDTRExponentForWater",void 0),(0,dr._)([(0,hr.o)({constValue:!1})],pr.prototype,"supportsTextureAtlas",void 0),(0,dr._)([(0,hr.o)({constValue:!0})],pr.prototype,"useFillLights",void 0);var vr=r(51931);class gr extends lr{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=Jt.h.Attribute,t.doubleSidedMode=xt.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,gr.shader)}}gr.shader=new Zt.J(vr.R,(()=>r.e(3072).then(r.bind(r,3072))));class _r extends St.F5{constructor(e){super(e,br),this.supportsEdges=!0,this._configuration=new pr,this._vertexBufferLayout=Sr(this.parameters)}isVisibleForOutput(e){return e!==_t.H.Shadow&&e!==_t.H.ShadowExcludeHighlight&&e!==_t.H.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:t,hasVertexColors:r,hasSymbolColors:n,vvColorEnabled:o}=e,a=(0,i.pC)(t)&&t.includes("color"),s="replace"===e.colorMixMode,c=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(a||o||n)?!!s||c:r?s?l:c:a||o||n?!!s||c:s?l:c}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=(0,i.pC)(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=(0,i.pC)(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,(0,i.pC)(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?H.Vr.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=(0,i.pC)(this.parameters.modelTransformation),e!==_t.H.Color&&e!==_t.H.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=xt.q.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?xt.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?xt.q.WindingOrder:xt.q.None,this._configuration.instancedColor=(0,i.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?Tt.f7.Schematic:Tt.f7.Normal:Tt.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<At.ve,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return(0,i.pC)(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,n,o,a){if((0,i.pC)(this.parameters.verticalOffset)){const e=r.camera;(0,l.s)(Or,t[12],t[13],t[14]);let i=null;switch(r.viewingMode){case vt.JY.Global:i=(0,l.n)(Cr,Or);break;case vt.JY.Local:i=(0,l.c)(Cr,wr)}let a=0;const s=(0,l.b)(Pr,Or,e.eye),c=(0,l.l)(s),u=(0,l.g)(s,s,1/c);let d=null;this.parameters.screenSizePerspective&&(d=(0,l.e)(i,u)),a+=(0,qt.Hx)(e,c,this.parameters.verticalOffset,d??0,this.parameters.screenSizePerspective),(0,l.g)(i,i,a),(0,l.t)(Mr,i,r.transform.inverseRotation),n=(0,l.b)(Ar,n,Mr),o=(0,l.b)(yr,o,Mr)}(0,qt.Bw)(e,r,n,o,Ht(r.verticalOffset),a)}requiresSlot(e,t){return(t===_t.H.Color||t===_t.H.Alpha||t===_t.H.Depth||t===_t.H.Normal||t===_t.H.Shadow||t===_t.H.ShadowHighlight||t===_t.H.ShadowExcludeHighlight||t===_t.H.Highlight||t===_t.H.ObjectAndLayerIdColor)&&(e===(this.parameters.transparent?this.parameters.writeDepth?mt.TRANSPARENT_MATERIAL:mt.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:mt.OPAQUE_MATERIAL)||e===mt.DRAPED_MATERIAL)}createGLMaterial(e){return new xr(e)}createBufferWriter(){return new jt(this._vertexBufferLayout)}}class xr extends bt.F{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==_t.H.Color&&this._output!==_t.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,l.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?gr:lr,e)}}class Tr extends cr{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const br=new Tr;function Sr(e){const t=(0,gt.U$)().vec3f(ae.T.POSITION).vec3f(ae.T.NORMAL),r=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId;return e.hasVertexTangents&&t.vec4f(ae.T.TANGENT),r&&t.vec2f(ae.T.UV0),e.hasVertexColors&&t.vec4u8(ae.T.COLOR),e.hasSymbolColors&&t.vec4u8(ae.T.SYMBOLCOLOR),(0,pt.Z)("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(ae.T.OBJECTANDLAYERIDCOLOR),t}const Ar=(0,u.c)(),yr=(0,u.c)(),wr=(0,u.f)(0,0,1),Cr=(0,u.c)(),Mr=(0,u.c)(),Or=(0,u.c)(),Pr=(0,u.c)(),Ir=P.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Rr(e,t){const r=await Er(e,t),n=await zr(r.textureDefinitions??{},t);let i=0;for(const o in n)if(n.hasOwnProperty(o)){const e=n[o];i+=e?.image?e.image.width*e.image.height*4:0}return{resource:r,textures:n,size:i+(0,M.Ul)(r)}}async function Er(e,t){const r=(0,i.pC)(t)&&t.streamDataRequester;if(r)return Lr(e,r,t);const n=await(0,C.q6)((0,w["default"])(e,(0,i.Wg)(t)));if(!0===n.ok)return n.value.data;(0,R.r9)(n.error),Nr(n.error)}async function Lr(e,t,r){const n=await(0,C.q6)(t.request(e,"json",r));if(!0===n.ok)return n.value;(0,R.r9)(n.error),Nr(n.error.details.url)}function Nr(e){throw new O.Z("",`Request for object resource failed: ${e}`)}function Hr(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(Ir.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Ir.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Ir.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(Ir.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else Ir.warn("Indexed geometries must specify faces"),n=!1;break}default:Ir.warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(Ir.warn("Geometry requires material"),n=!1);const i=e.params.vertexAttributes;for(const o in i)i[o].values||(Ir.warn("Geometries with externally defined attributes are not yet supported"),n=!1);return n}function Dr(e,t){const r=new Array,n=new Array,o=new Array,a=new I.r,s=e.resource,c=E.G.parse(s.version||"1.0","wosr");Ur.validate(c);const l=s.model.name,d=s.model.geometries,h=s.materialDefinitions??{},f=e.textures;let m=0;const p=new Map;for(let v=0;v<d.length;v++){const e=d[v];if(!Hr(e))continue;const s=Vr(e),c=e.params.vertexAttributes,l=[];for(const t in c){const e=c[t],r=e.values;l.push([t,new N.a(r,e.valuesPerElement,!0)])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,t[e].values])}const _=s.texture,x=f&&f[_];if(x&&!p.has(_)){const{image:e,params:t}=x,r=new ft(e,t);n.push(r),p.set(_,r)}const T=p.get(_),b=T?T.id:void 0,S=s.material;let A=a.get(S,_);if((0,i.Wi)(A)){const e=h[S.substring(S.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=x?Br(x.alphaChannelUsage):void 0,s={ambient:(0,u.d)(e.diffuse),diffuse:(0,u.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:H.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,i.pC)(t)&&t.materialParamsMixin&&Object.assign(s,t.materialParamsMixin),A=new _r(s),a.set(S,_,A)}o.push(A);const y=new le(A,l,g);m+=g.position?g.position.length:0,r.push(y)}return{engineResources:[{name:l,stageResources:{textures:n,materials:o,geometries:r},pivotOffset:s.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:Fr(r)}}function Fr(e){const t=(0,d.cS)();return e.forEach((e=>{const r=e.boundingInfo;(0,i.pC)(r)&&((0,d.pp)(t,r.bbMin),(0,d.pp)(t,r.bbMax))})),t}async function zr(e,t){const r=[];for(const a in e){const n=e[a],o=n.images[0].data;if(!o){Ir.warn("Externally referenced texture data is not yet supported");continue}const s=n.encoding+";base64,"+o,c="/textureDefinitions/"+a,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:Pe.e8.REPEAT,t:Pe.e8.REPEAT},preMultiplyAlpha:Br(l)!==H.JJ.Opaque},d=(0,i.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,L.t)(s,t);r.push(d.then((e=>({refId:c,image:e,params:u,alphaChannelUsage:l}))))}const n=await Promise.all(r),o={};for(const i of n)o[i.refId]=i;return o}function Br(e){switch(e){case"mask":return H.JJ.Mask;case"maskAndTransparency":return H.JJ.MaskBlend;case"none":return H.JJ.Opaque;default:return H.JJ.Blend}}function Vr(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Ur=new E.G(1,2,"wosr");var Gr=r(27368),Wr=r(81770),$r=r(55620),kr=r(34305);async function jr(e,t){const r=qr((0,n.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Rr(r.url,t)),{engineResources:n,referenceBoundingBox:i}=Dr(e,t);return{lods:n,referenceBoundingBox:i,isEsriSymbolResource:!1,isWosr:!0}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):(0,g.Q)(new v.C(t.streamDataRequester),r.url,t,t.usePBR)),a=(0,i.U2)(o.model.meta,"ESRI_proxyEllipsoid"),s=o.meta.isEsriSymbolResource&&(0,i.pC)(a)&&o.meta.uri.includes("/RealisticTrees/");s&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,en(o,a));const c=!!t.usePBR,l=o.meta.isEsriSymbolResource?{usePBR:c,isSchematic:!1,treeRendering:s,mrrFactors:[0,1,.2]}:{usePBR:c,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},u={...t.materialParamsMixin,treeRendering:s},{engineResources:d,referenceBoundingBox:h}=Jr(o,l,u,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:d,referenceBoundingBox:h,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function qr(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Jr(e,t,r,n){const o=e.model,a=new Array,s=new Map,c=new Map,l=o.lods.length,u=(0,d.cS)();return o.lods.forEach(((e,h)=>{const f=!0===n.skipHighLods&&(l>1&&0===h||l>3&&1===h)||!1===n.skipHighLods&&null!=n.singleLodIndex&&h!==n.singleLodIndex;if(f&&0!==h)return;const m=new y(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const n=f?new _r({}):Xr(o,e,m,t,r,s,c),{geometry:a,vertexCount:l}=Kr(e,(0,i.pC)(n)?n:new _r({})),p=a.boundingInfo;(0,i.pC)(p)&&0===h&&((0,d.pp)(u,p.bbMin),(0,d.pp)(u,p.bbMax)),(0,i.pC)(n)&&(m.stageResources.geometries.push(a),m.numberOfVertices+=l)})),f||a.push(m)})),{engineResources:a,referenceBoundingBox:u}}function Xr(e,t,r,n,o,a,s){const c=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),u=(0,i.pC)(t.attributes.texCoord0),d=(0,i.pC)(t.attributes.normal);if((0,i.Wi)(l))return null;const h=Zr(l.alphaMode);if(!a.has(c)){if(u){const t=(t,r=!1)=>{if((0,i.pC)(t)&&!s.has(t)){const n=e.textures.get(t);if((0,i.pC)(n)){const e=n.data;s.set(t,new ft((0,x.$A)(e)?e.data:e,{...n.parameters,preMultiplyAlpha:!(0,x.$A)(e)&&r,encoding:(0,x.$A)(e)&&(0,i.pC)(e.encoding)?e.encoding:void 0}))}}};t(l.textureColor,h!==H.JJ.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const r=l.color[0]**(1/Gr.K),f=l.color[1]**(1/Gr.K),m=l.color[2]**(1/Gr.K),p=l.emissiveFactor[0]**(1/Gr.K),v=l.emissiveFactor[1]**(1/Gr.K),g=l.emissiveFactor[2]**(1/Gr.K),_=(0,i.pC)(l.textureColor)&&u?s.get(l.textureColor):null;a.set(c,new _r({...n,transparent:h===H.JJ.Blend,customDepthTest:H.Gv.Lequal,textureAlphaMode:h,textureAlphaCutoff:l.alphaCutoff,diffuse:[r,f,m],ambient:[r,f,m],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?H.Vr.None:H.Vr.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:d?Jt.h.Attribute:Jt.h.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:(0,i.pC)(_)?_.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:(0,i.pC)(l.textureNormal)&&u?s.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:(0,i.pC)(_)&&!!_.params.preMultiplyAlpha,occlusionTextureId:(0,i.pC)(l.textureOcclusion)&&u?s.get(l.textureOcclusion).id:void 0,emissiveTextureId:(0,i.pC)(l.textureEmissive)&&u?s.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,i.pC)(l.textureMetallicRoughness)&&u?s.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[p,v,g],mrrFactors:[l.metallicFactor,l.roughnessFactor,n.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:S(l.colorTextureTransform),normalTextureTransformMatrix:S(l.normalTextureTransform),occlusionTextureTransformMatrix:S(l.occlusionTextureTransform),emissiveTextureTransformMatrix:S(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:S(l.metallicRoughnessTextureTransform),...o}))}const f=a.get(c);if(r.stageResources.materials.push(f),u){const e=e=>{(0,i.pC)(e)&&r.stageResources.textures.push(s.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return f}function Kr(e,t){const r=e.attributes.position.count,n=Qr(e.indices||r,e.primitiveType),a=(0,p.gS)(h.ct,r);(0,f.t)(a,e.attributes.position,e.transform);const s=[[ae.T.POSITION,new N.a(a.typedBuffer,a.elementCount,!0)]],c=[[ae.T.POSITION,n]];if((0,i.pC)(e.attributes.normal)){const t=(0,p.gS)(h.ct,r);(0,o.b)(Yr,e.transform),(0,f.a)(t,e.attributes.normal,Yr),s.push([ae.T.NORMAL,new N.a(t.typedBuffer,t.elementCount,!0)]),c.push([ae.T.NORMAL,n])}if((0,i.pC)(e.attributes.tangent)){const t=(0,p.gS)(h.ek,r);(0,o.b)(Yr,e.transform),(0,m.t)(t,e.attributes.tangent,Yr),s.push([ae.T.TANGENT,new N.a(t.typedBuffer,t.elementCount,!0)]),c.push([ae.T.TANGENT,n])}if((0,i.pC)(e.attributes.texCoord0)){const t=(0,p.gS)(h.Eu,r);(0,Wr.n)(t,e.attributes.texCoord0),s.push([ae.T.UV0,new N.a(t.typedBuffer,t.elementCount,!0)]),c.push([ae.T.UV0,n])}if((0,i.pC)(e.attributes.color)){const t=(0,p.gS)(h.mc,r);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h.ek?(0,m.s)(t,e.attributes.color,255):e.attributes.color instanceof h.mc?(0,$r.c)(t,e.attributes.color):e.attributes.color instanceof h.v6&&(0,m.s)(t,e.attributes.color,1/256);else{(0,$r.f)(t,255,255,255,255);const r=new h.ne(t.buffer,0,4);e.attributes.color instanceof h.ct?(0,f.s)(r,e.attributes.color,255):e.attributes.color instanceof h.ne?(0,kr.c)(r,e.attributes.color):e.attributes.color instanceof h.mw&&(0,f.s)(r,e.attributes.color,1/256)}s.push([ae.T.COLOR,new N.a(t.typedBuffer,t.elementCount,!0)]),c.push([ae.T.COLOR,n])}return{geometry:new le(t,s,c),vertexCount:r}}const Yr=(0,a.c)();function Zr(e){switch(e){case"BLEND":return H.JJ.Blend;case"MASK":return H.JJ.Mask;case"OPAQUE":case null:case void 0:return H.JJ.Opaque}}function Qr(e,t){switch(t){case Pe.MX.TRIANGLES:return(0,_.nh)(e);case Pe.MX.TRIANGLE_STRIP:return(0,_.DA)(e);case Pe.MX.TRIANGLE_FAN:return(0,_.jX)(e)}}function en(e,t){for(let r=0;r<e.model.lods.length;++r){const n=e.model.lods[r];for(const o of n.parts){const n=o.attributes.normal;if((0,i.Wi)(n))return;const a=o.attributes.position,d=a.count,f=(0,u.c)(),m=(0,u.c)(),v=(0,u.c)(),g=(0,p.gS)(h.mc,d),_=(0,p.gS)(h.ct,d),x=(0,s.a)((0,c.c)(),o.transform);for(let i=0;i<d;i++){a.getVec(i,m),n.getVec(i,f),(0,l.m)(m,m,o.transform),(0,l.b)(v,m,t.center),(0,l.C)(v,v,t.radius);const s=v[2],c=(0,l.l)(v),u=Math.min(.45+.55*c*c,1);(0,l.C)(v,v,t.radius),null!==x&&(0,l.m)(v,v,x),(0,l.n)(v,v),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,l.h)(v,v,f,s>-1?.2:Math.min(-4*s-3.8,1)),_.setVec(i,v),g.set(i,0,255*u),g.set(i,1,255*u),g.set(i,2,255*u),g.set(i,3,255)}o.attributes.normal=_,o.attributes.color=g}}}},7738:function(e,t,r){r.d(t,{a9:function(){return n}});var n;r(67752),r(8693);!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(n||(n={}))},96884:function(e,t,r){r.d(t,{U$:function(){return s}});r(23767),r(8585),r(68696),r(57658);var n=r(76180),i=r(71946);class o{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new o(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,n){const i=this.stride;if(i%4==0){const o=new Uint32Array(e.buffer,t*i,n*i/4);new Uint32Array(this.buffer,r*i,n*i/4).set(o)}else{const o=new Uint8Array(e.buffer,t*i,n*i);new Uint8Array(this.buffer,r*i,n*i).set(o)}}}class a{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,n.Eu,t),this}vec2f64(e,t){return this._appendField(e,n.q6,t),this}vec3f(e,t){return this._appendField(e,n.ct,t),this}vec3f64(e,t){return this._appendField(e,n.fP,t),this}vec4f(e,t){return this._appendField(e,n.ek,t),this}vec4f64(e,t){return this._appendField(e,n.Cd,t),this}mat3f(e,t){return this._appendField(e,n.gK,t),this}mat3f64(e,t){return this._appendField(e,n.ey,t),this}mat4f(e,t){return this._appendField(e,n.bj,t),this}mat4f64(e,t){return this._appendField(e,n.O1,t),this}vec4u8(e,t){return this._appendField(e,n.mc,t),this}f32(e,t){return this._appendField(e,n.ly,t),this}f64(e,t){return this._appendField(e,n.oS,t),this}u8(e,t){return this._appendField(e,n.D_,t),this}u16(e,t){return this._appendField(e,n.av,t),this}i8(e,t){return this._appendField(e,n.Hz,t),this}vec2i8(e,t){return this._appendField(e,n.Vs,t),this}vec2i16(e,t){return this._appendField(e,n.or,t),this}vec2u8(e,t){return this._appendField(e,n.xA,t),this}vec4u16(e,t){return this._appendField(e,n.v6,t),this}u32(e,t){return this._appendField(e,n.Nu,t),this}_appendField(e,t,r){const n=t.ElementCount*(0,i.n1)(t.ElementType),o=this.stride;this.fields.set(e,{size:n,constructor:t,offset:o,optional:r}),this.stride+=n,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.includes(e)}createBuffer(e){return new o(this,e)}createView(e){return new o(this,e)}clone(){const e=new a;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new a}},14539:function(e,t,r){r.d(t,{Zu:function(){return c},bA:function(){return l},qj:function(){return u}});var n=r(96377),i=r(64221),o=r(8953),a=r(65982);function s(e){e.varyings.add("linearDepth","float")}function c(e){e.vertex.uniforms.add(new o.A("nearFar",((e,t)=>t.camera.nearFar)))}function l(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function u(e,t){const{vertex:r}=e;switch(t.output){case n.H.Color:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case n.H.Depth:case n.H.Shadow:case n.H.ShadowHighlight:case n.H.ShadowExcludeHighlight:return e.include(i.up,t),s(e),c(e),l(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},98290:function(e,t,r){r.d(t,{w:function(){return i}});var n=r(65982);function i(e){e.vertex.code.add(n.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},53800:function(e,t,r){r.d(t,{k:function(){return o}});var n=r(65982),i=r(30150);function o(e,t=!0){e.attributes.add(i.T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(n.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?n.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},96377:function(e,t,r){var n;r.d(t,{H:function(){return n}}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"}(n||(n={}))},36315:function(e,t,r){r.d(t,{f5:function(){return u}});var n=r(8693),i=r(51802),o=r(94370),a=r(65554),s=r(74674),c=r(69783),l=(r(19207),r(65982));function u(e,t){d(e,t,[new c.B("slicePlaneOrigin",((e,r)=>p(t,e,r))),new c.B("slicePlaneBasis1",((e,r)=>v(t,e,r,(0,n.Wg)(r.slicePlane)?.basis1))),new c.B("slicePlaneBasis2",((e,r)=>v(t,e,r,(0,n.Wg)(r.slicePlane)?.basis2)))])}function d(e,t,r){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}e.extensions.add("GL_OES_standard_derivatives"),t.hasSliceInVertexProgram&&e.vertex.uniforms.add(r),e.fragment.uniforms.add(r);const n=l.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.hasSliceHighlight?l.H`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(n),e.fragment.code.add(n),e.fragment.code.add(o)}function h(e,t,r){return e.instancedDoublePrecision?(0,a.s)(g,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function f(e,t){return(0,n.pC)(e)?(0,a.b)(_,t.origin,e):t.origin}function m(e,t,r){return e.hasSliceTranslatedView?(0,n.pC)(t)?(0,i.w)(T,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function p(e,t,r){if((0,n.Wi)(r.slicePlane))return s.Z;const i=h(e,t,r),o=f(i,r.slicePlane),c=m(e,i,r);return(0,n.pC)(c)?(0,a.m)(_,o,c):o}function v(e,t,r,i){if((0,n.Wi)(i)||(0,n.Wi)(r.slicePlane))return s.Z;const o=h(e,t,r),c=f(o,r.slicePlane),l=m(e,o,r);return(0,n.pC)(l)?((0,a.a)(x,i,c),(0,a.m)(_,c,l),(0,a.m)(x,x,l),(0,a.b)(x,x,_)):i}const g=(0,s.c)(),_=(0,s.c)(),x=(0,s.c)(),T=(0,o.c)()},26616:function(e,t,r){r.d(t,{w:function(){return o}});var n=r(14539),i=r(65982);function o(e,t){if((0,n.bA)(e),t.hasModelTransformation)return e.vertex.code.add(i.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void e.vertex.code.add(i.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);e.vertex.code.add(i.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(i.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},87307:function(e,t,r){r.d(t,{f:function(){return p}});var n=r(61445),i=r(65554),o=r(74674),a=r(96377),s=r(7158),c=r(10262),l=r(69783),u=r(65982),d=r(33274),h=r(30150),f=r(12470);class m extends d.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function p(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(h.T.MODELORIGINHI,"vec3"),e.attributes.add(h.T.MODELORIGINLO,"vec3"),e.attributes.add(h.T.MODEL,"mat3"),e.attributes.add(h.T.MODELNORMAL,"mat3"));const r=e.vertex;t.instancedDoublePrecision&&(r.include(s.$,t),r.uniforms.add(new l.B("viewOriginHi",((e,t)=>(0,f.U8)((0,i.s)(v,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),v)))),r.uniforms.add(new l.B("viewOriginLo",((e,t)=>(0,f.GB)((0,i.s)(v,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),v))))),r.code.add(u.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(u.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?u.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(u.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===a.H.Normal&&((0,c._8)(r),r.code.add(u.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&r.code.add(u.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}(0,n._)([(0,d.o)()],m.prototype,"instancedDoublePrecision",void 0);const v=(0,o.c)()},55372:function(e,t,r){r.d(t,{O:function(){return c},h:function(){return a}});var n=r(56616),i=r(65982);function o(e){const t=i.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.vertex.code.add(t)}var a,s=r(30150);function c(e,t){switch(t.normalType){case a.CompressedAttribute:e.include(o),e.attributes.add(s.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(i.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case a.Attribute:e.attributes.add(s.T.NORMAL,"vec3"),e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,n.Bg)(t.normalType);case a.COUNT:case a.Ground:}}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(a||(a={}))},8943:function(e,t,r){r.d(t,{f:function(){return o}});var n=r(65982),i=r(30150);function o(e){e.attributes.add(i.T.POSITION,"vec3"),e.vertex.code.add(n.H`vec3 positionModel() { return position; }`)}},49120:function(e,t,r){r.d(t,{R:function(){return l}});var n=r(7738),i=r(65982);function o(e){e.vertex.code.add(i.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.H.int(n.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.H.int(n.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.H.int(n.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.H.int(n.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var a=r(25039),s=r(30150),c=r(47592);function l(e,t){t.hasSymbolColors?(e.include(o),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(i.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new a._("colorMixMode",(e=>c.FZ[e.colorMixMode]))),e.vertex.code.add(i.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},37011:function(e,t,r){r.d(t,{D:function(){return s},N:function(){return n}});var n,i=r(56616),o=r(65982),a=r(30150);function s(e,t){switch(t.textureCoordinateType){case n.Default:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case n.Compressed:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case n.Atlas:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(a.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,i.Bg)(t.textureCoordinateType);case n.None:return void e.vertex.code.add(o.H`void forwardTextureCoordinates() {}`);case n.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(n||(n={}))},14009:function(e,t,r){r.d(t,{c:function(){return o}});var n=r(65982),i=r(30150);function o(e,t){t.hasVertexColors?(e.attributes.add(i.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(n.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(n.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(n.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},63281:function(e,t,r){r.d(t,{Bb:function(){return u},d4:function(){return d}});var n=r(56616),i=r(26114),o=(r(85381),r(55372)),a=r(64221),s=r(65982),c=r(29577),l=r(72407);function u(e,t){switch(t.normalType){case o.h.Attribute:case o.h.CompressedAttribute:e.include(o.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new c.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new l.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(s.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case o.h.Ground:e.include(a.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.H`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?s.H`normalize(vPositionWorldCameraRelative);`:s.H`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case o.h.ScreenDerivative:e.vertex.code.add(s.H`void forwardNormal() {}`);break;default:(0,n.Bg)(t.normalType);case o.h.COUNT:}}class d extends a.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,i.c)()}}},64221:function(e,t,r){r.d(t,{su:function(){return p},up:function(){return m}});var n=r(26114),i=r(94370),o=(r(64680),r(74674)),a=r(8943),s=r(7158),c=r(69783),l=r(19207),u=r(65982),d=r(29577),h=r(72407),f=r(74824);function m(e,t){e.include(a.f);const r=e.vertex;r.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add([new l.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new l.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new f.g("transformProjFromView",(e=>e.transformProjFromView)),new d.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new c.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new c.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))]),r.code.add(u.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(u.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?u.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:u.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new l.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(u.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(u.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends u.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,o.c)(),this.transformWorldFromViewTL=(0,o.c)(),this.transformViewFromCameraRelativeRS=(0,n.c)(),this.transformProjFromView=(0,i.c)()}}},69813:function(e,t,r){r.d(t,{i:function(){return s}});var n=r(56616),i=r(37011),o=r(65982);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function s(e,t){switch(e.include(i.D,t),e.fragment.code.add(o.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case i.N.Default:case i.N.Compressed:return void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case i.N.Atlas:return e.include(a),void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:(0,n.Bg)(t.textureCoordinateType);case i.N.None:case i.N.COUNT:return}}},89145:function(e,t,r){r.d(t,{L:function(){return h}});var n=r(97848),i=r(85381),o=r(87035),a=r(65982);function s(e){e.vertex.code.add(a.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(a.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(a.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(a.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function c(e){e.uniforms.add(new o.N("screenSizePerspectiveAlignment",(e=>l(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function l(e){return(0,n.s)(u,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}const u=(0,i.c)();var d=r(10262);function h(e,t){const r=e.vertex;t.hasVerticalOffset?(m(r),t.hasScreenSizePerspective&&(e.include(s),c(r),(0,d.hY)(e.vertex,t)),r.code.add(a.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?a.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:a.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?a.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:a.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(a.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const f=(0,i.c)();function m(e){e.uniforms.add(new o.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:i,screenLength:o}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,n.s)(f,o*s,a,r,i)})))}},71779:function(e,t,r){r.d(t,{s:function(){return P}});var n=r(8693),i=r(94370),o=r(14539),a=r(96377),s=r(36315),c=r(26616),l=r(55372),u=r(65982),d=r(30150);function h(e,t){const r=t.output===a.H.ObjectAndLayerIdColor,n=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),n?e.attributes.add(d.T.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):e.attributes.add(d.T.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(u.H`
     void forwardObjectAndLayerIdColor() {
      ${r?n?u.H`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:u.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:u.H``} }`),e.fragment.code.add(u.H`
      void outputObjectAndLayerIdColor() {
        ${r?u.H`gl_FragColor = objectAndLayerIdColorVarying;`:u.H``} }`)}var f=r(37011),m=r(63281),p=r(33451);function v(e,t){switch(e.fragment.include(p.n),t.output){case a.H.Shadow:case a.H.ShadowHighlight:case a.H.ShadowExcludeHighlight:e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(u.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case a.H.Depth:e.fragment.code.add(u.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}var g=r(85381),_=r(76363),x=r(84970),T=r(73445);const b=(0,g.f)(1,1,0,1),S=(0,g.f)(1,0,1,1);function A(e,t){e.fragment.uniforms.add((0,x.J)("depthTex",((e,t)=>t.highlightDepthTexture),t.hasWebGL2Context?T.D.None:T.D.InvSize)),e.fragment.constants.add("occludedHighlightFlag","vec4",b).add("unoccludedHighlightFlag","vec4",S),e.fragment.code.add(u.H`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${(0,_.b6)(t,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}var y=r(48601),w=r(82175),C=r(10262),M=r(74824),O=r(81789);function P(e,t){const{vertex:r,fragment:d}=e,p=t.hasModelTransformation;p&&r.uniforms.add(new M.g("model",(e=>(0,n.pC)(e.modelTransformation)?e.modelTransformation:i.I)));const g=t.hasColorTexture&&t.alphaDiscardMode!==O.JJ.Opaque;switch(t.output){case a.H.Depth:case a.H.Shadow:case a.H.ShadowHighlight:case a.H.ShadowExcludeHighlight:case a.H.ObjectAndLayerIdColor:(0,C.Sv)(r,t),e.include(c.w,t),e.include(f.D,t),e.include(y.k,t),e.include(v,t),e.include(s.f5,t),e.include(h,t),(0,o.Zu)(e),e.varyings.add("depth","float"),g&&d.uniforms.add(new x.A("tex",(e=>e.texture))),r.code.add(u.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${p?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(w.z,t),d.code.add(u.H`
          void main(void) {
            discardBySlice(vpos);
            ${g?u.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?u.H`colorUV`:u.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===a.H.ObjectAndLayerIdColor?u.H`outputObjectAndLayerIdColor();`:u.H`outputDepth(depth);`}
          }
        `);break;case a.H.Normal:(0,C.Sv)(r,t),e.include(c.w,t),e.include(l.O,t),e.include(m.Bb,t),e.include(f.D,t),e.include(y.k,t),g&&d.uniforms.add(new x.A("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),r.code.add(u.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${t.normalType===l.h.Attribute?u.H`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(w.z,t),d.code.add(u.H`
          void main() {
            discardBySlice(vpos);
            ${g?u.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?u.H`colorUV`:u.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===l.h.ScreenDerivative?u.H`
                vec3 normal = screenDerivativeNormal(vPositionView);`:u.H`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case a.H.Highlight:(0,C.Sv)(r,t),e.include(c.w,t),e.include(f.D,t),e.include(y.k,t),g&&d.uniforms.add(new x.A("tex",(e=>e.texture))),r.code.add(u.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(w.z,t),e.include(A,t),d.code.add(u.H`
          void main() {
            discardBySlice(vpos);
            ${g?u.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?u.H`colorUV`:u.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},9804:function(e,t,r){r.d(t,{S:function(){return o}});var n=r(33451),i=r(65982);function o(e){e.include(n.n),e.code.add(i.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},84367:function(e,t,r){r.d(t,{Q:function(){return f}});var n=r(37011),i=r(69813),o=r(59260),a=r(76363),s=r(65982),c=r(17826),l=r(84970),u=r(73445),d=r(51313),h=r(30150);function f(e,t){const r=e.fragment;if(t.hasVertexTangents?(e.attributes.add(h.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===o.q.WindingOrder?r.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(s.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.textureCoordinateType!==n.N.None){e.include(i.i,t);const n=t.supportsTextureAtlas?t.hasWebGL2Context?u.D.None:u.D.Size:u.D.None;r.uniforms.add(t.pbrTextureBindType===d.P.Pass?(0,l.J)("normalTexture",(e=>e.textureNormal),n):(0,c.F)("normalTexture",(e=>e.textureNormal),n)),r.code.add(s.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?s.H`vtc.size = ${(0,a.w_)(t,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},70914:function(e,t,r){r.d(t,{K:function(){return g}});var n=r(76363),i=r(65982),o=r(84970),a=r(73445),s=(r(23767),r(8585),r(68696),r(82801),r(8693),r(47001),r(98786),r(68205)),c=r(20572),l=r(85018),u=r(7436),d=r(14434),h=r(9408);class f extends c.A{initializeProgram(e){return new u.$(e.rctx,f.shader.get().build(),l.i)}initializePipeline(){return(0,h.sm)({colorWrite:h.BK})}}f.shader=new s.J(d.S,(()=>r.e(2689).then(r.bind(r,66630))));var m=r(26714);class p extends c.A{initializeProgram(e){return new u.$(e.rctx,p.shader.get().build(),l.i)}initializePipeline(){return(0,h.sm)({colorWrite:h.BK})}}p.shader=new s.J(m.S,(()=>r.e(8514).then(r.bind(r,38514))));r(12686);r(17923),r(98473),r(29964),r(33900);const v=2;function g(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add((0,o.J)("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture),t.hasWebGL2Context?a.D.None:a.D.InvSize)),r.constants.add("blurSizePixelsInverse","float",1/v),r.code.add(i.H`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${(0,n.w_)(t,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):r.code.add(i.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},32786:function(e,t,r){r.d(t,{XP:function(){return C},PN:function(){return y},sC:function(){return w}});var n=r(56616),i=r(65554),o=r(74674),a=r(97848),s=r(85381),c=r(30382),l=r(19207),u=r(87035),d=r(65982);function h(e,t){const r=e.fragment,n=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===n?(r.uniforms.add(new l.J("lightingAmbientSH0",((e,t)=>(0,i.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===n?(r.uniforms.add([new u.N("lightingAmbientSH_R",((e,t)=>(0,a.s)(m,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new u.N("lightingAmbientSH_G",((e,t)=>(0,a.s)(m,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new u.N("lightingAmbientSH_B",((e,t)=>(0,a.s)(m,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===n&&(r.uniforms.add([new l.J("lightingAmbientSH0",((e,t)=>(0,i.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new u.N("lightingAmbientSH_R1",((e,t)=>(0,a.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new u.N("lightingAmbientSH_G1",((e,t)=>(0,a.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new u.N("lightingAmbientSH_B1",((e,t)=>(0,a.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new u.N("lightingAmbientSH_R2",((e,t)=>(0,a.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new u.N("lightingAmbientSH_G2",((e,t)=>(0,a.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new u.N("lightingAmbientSH_B2",((e,t)=>(0,a.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==c.f7.Normal&&t.pbrMode!==c.f7.Schematic||r.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const f=(0,o.c)(),m=(0,s.c)();var p=r(70914),v=r(6784),g=r(78895),_=r(6267),x=r(91812),T=r(51313);class b extends x.x{constructor(e,t){super(e,"bool",T.P.Pass,((r,n,i)=>r.setUniform1b(e,t(n,i))))}}var S=r(73893);r(67752);r(57658);(0,o.c)();const A=.4;(0,o.c)();function y(e){e.constants.add("ambientBoostFactor","float",A)}function w(e){e.uniforms.add(new S.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function C(e,t){const r=e.fragment;switch(e.include(p.K,t),t.pbrMode!==c.f7.Disabled&&e.include(g.T,t),e.include(h,t),e.include(_.e),r.code.add(d.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===c.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),y(r),w(r),(0,v.Pe)(r),r.code.add(d.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?d.H`normalize(vPosWorld)`:d.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.F1)(r),r.code.add(d.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case c.f7.Disabled:case c.f7.WaterOnIntegratedMesh:case c.f7.Water:e.include(v.kR,t),r.code.add(d.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case c.f7.Normal:case c.f7.Schematic:r.code.add(d.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(d.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(d.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new S.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new S.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),r.code.add(d.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(d.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===c.f7.Schematic?d.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:d.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case c.f7.Terrain:case c.f7.TerrainWithWater:e.include(v.kR,t),r.code.add(d.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,n.Bg)(t.pbrMode);case c.f7.COUNT:}}},6784:function(e,t,r){r.d(t,{F1:function(){return s},Pe:function(){return a},kR:function(){return l}});var n=r(19207),i=r(73893),o=r(65982);function a(e){e.uniforms.add(new n.J("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function s(e){e.uniforms.add(new n.J("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function c(e,t){t.useLegacyTerrainShading?e.uniforms.add(new i.p("lightingFixedFactor",((e,t)=>t.lighting.noonFactor*(1-t.lighting.globalFactor)))):e.constants.add("lightingFixedFactor","float",0)}function l(e,t){const r=e.fragment;a(r),s(r),c(r,t),r.code.add(o.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},97195:function(e,t,r){r.d(t,{l:function(){return s}});var n=r(9804),i=r(8953),o=r(65982),a=r(84970);function s(e,t){t.hasMultipassTerrain&&(e.fragment.include(n.S),e.fragment.uniforms.add(new a.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new i.A("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new i.A("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(o.H`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}},59260:function(e,t,r){r.d(t,{k:function(){return a},q:function(){return n}});var n,i=r(56616),o=r(65982);function a(e,t){const r=e.fragment;switch(r.code.add(o.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case n.None:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case n.View:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case n.WindingOrder:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,i.Bg)(t.doubleSidedMode);case n.COUNT:}}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(n||(n={}))},78895:function(e,t,r){r.d(t,{T:function(){return s}});var n=r(65982);function i(e){const t=e.fragment.code;t.add(n.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(n.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(n.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=r(30382),a=r(6267);function s(e,t){const r=e.fragment.code;e.include(a.e),t.pbrMode!==o.f7.Normal&&t.pbrMode!==o.f7.Schematic&&t.pbrMode!==o.f7.Terrain&&t.pbrMode!==o.f7.TerrainWithWater||(r.add(n.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(n.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==o.f7.Normal&&t.pbrMode!==o.f7.Schematic||(e.include(i),r.add(n.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(n.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(n.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(n.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},30382:function(e,t,r){r.d(t,{f7:function(){return f},jV:function(){return m}});var n=r(64680),i=r(69813),o=r(76363),a=r(69783),s=r(19207),c=r(65982),l=r(17826),u=r(84970),d=r(73445),h=r(51313);r(20901);(0,n.f)(0,.6,.2);var f;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Terrain=5]="Terrain",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(f||(f={}));function m(e,t){const r=e.fragment,n=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===f.Normal&&n&&e.include(i.i,t),t.pbrMode!==f.Schematic)if(t.pbrMode!==f.Disabled){if(t.pbrMode===f.Normal){r.code.add(c.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.supportsTextureAtlas?t.hasWebGL2Context?d.D.None:d.D.Size:d.D.None,i=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(i===h.P.Pass?(0,u.J)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):(0,l.F)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),r.code.add(c.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(i===h.P.Pass?(0,u.J)("texEmission",(e=>e.textureEmissive),e):(0,l.F)("texEmission",(e=>e.textureEmissive),e)),r.code.add(c.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(i===h.P.Pass?(0,u.J)("texOcclusion",(e=>e.textureOcclusion),e):(0,l.F)("texOcclusion",(e=>e.textureOcclusion),e)),r.code.add(c.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(c.H`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(i===h.P.Pass?[new s.J("emissionFactor",(e=>e.emissiveFactor)),new s.J("mrrFactors",(e=>e.mrrFactors))]:[new a.B("emissionFactor",(e=>e.emissiveFactor)),new a.B("mrrFactors",(e=>e.mrrFactors))]),r.code.add(c.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${n?c.H`vtc.uv = vuv0;`:""}
      ${t.hasMetallicRoughnessTextureTransform?c.H`vtc.uv = metallicRoughnessUV;`:""}
      ${t.hasMetallicRoughnessTexture?t.supportsTextureAtlas?c.H`
                vtc.size = ${(0,o.w_)(t,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:c.H`applyMetallnessAndRoughness(vtc);`:""}
      ${t.hasEmissiveTextureTransform?c.H`vtc.uv = emissiveUV;`:""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?c.H`
                vtc.size = ${(0,o.w_)(t,"texEmission")};
                applyEmission(vtc);`:c.H`applyEmission(vtc);`:""}
      ${t.hasOcclusionTextureTransform?c.H`vtc.uv = occlusionUV;`:""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?c.H`
                vtc.size = ${(0,o.w_)(t,"texOcclusion")};
                applyOcclusion(vtc);`:c.H`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(c.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(c.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}},6267:function(e,t,r){r.d(t,{e:function(){return i}});var n=r(65982);function i(e){e.vertex.code.add(n.H`const float PI = 3.141592653589793;`),e.fragment.code.add(n.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},43714:function(e,t,r){r.d(t,{XE:function(){return p},hb:function(){return m}});r(74674);var n=r(33451),i=r(76363),o=r(87035),a=r(25039),s=r(65982),c=r(91812),l=r(51313);class u extends c.x{constructor(e,t,r){super(e,"mat4",l.P.Draw,((r,n,i)=>r.setUniformMatrix4fv(e,t(n,i))),r)}}class d extends c.x{constructor(e,t,r){super(e,"mat4",l.P.Pass,((r,n,i)=>r.setUniformMatrix4fv(e,t(n,i))),r)}}var h=r(84970),f=r(73445);function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),v(e,t))}function p(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new u("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),v(e,t))}function v(e,t){const r=e.fragment;r.include(n.n),r.uniforms.add([...(0,h.J)("shadowMapTex",((e,t)=>t.shadowMap.depthTexture),t.hasWebGL2Context?f.D.None:f.D.Size),new a._("numCascades",((e,t)=>t.shadowMap.numCascades)),new o.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))]),r.code.add(s.H`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${(0,i.w_)(t,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}},73682:function(e,t,r){r.d(t,{DT:function(){return d},NI:function(){return c},R5:function(){return l},av:function(){return s},jF:function(){return u}});var n=r(8693),i=r(57409),o=r(65982),a=r(72407);function s(e){e.vertex.uniforms.add(new a.c("colorTextureTransformMatrix",(e=>(0,n.pC)(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:(0,i.c)()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(o.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function c(e){e.vertex.uniforms.add(new a.c("normalTextureTransformMatrix",(e=>(0,n.pC)(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:(0,i.c)()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(o.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function l(e){e.vertex.uniforms.add(new a.c("emissiveTextureTransformMatrix",(e=>(0,n.pC)(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:(0,i.c)()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(o.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function u(e){e.vertex.uniforms.add(new a.c("occlusionTextureTransformMatrix",(e=>(0,n.pC)(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:(0,i.c)()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(o.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function d(e){e.vertex.uniforms.add(new a.c("metallicRoughnessTextureTransformMatrix",(e=>(0,n.pC)(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:(0,i.c)()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},48601:function(e,t,r){r.d(t,{k:function(){return h}});var n=r(19207),i=r(91812),o=r(51313);class a extends i.x{constructor(e,t,r){super(e,"vec4",o.P.Pass,((r,n,i)=>r.setUniform4fv(e,t(n,i))),r)}}class s extends i.x{constructor(e,t,r){super(e,"float",o.P.Pass,((r,n,i)=>r.setUniform1fv(e,t(n,i))),r)}}var c=r(65982),l=r(72407),u=r(30150);r(26114),r(74674),r(40449);const d=8;function h(e,t){t.hasVvInstancing&&(t.vvSize||t.vvColor)&&e.attributes.add(u.T.INSTANCEFEATUREATTRIBUTE,"vec4");const r=e.vertex;t.vvSize?(r.uniforms.add(new n.J("vvSizeMinSize",(e=>e.vvSizeMinSize))),r.uniforms.add(new n.J("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),r.uniforms.add(new n.J("vvSizeOffset",(e=>e.vvSizeOffset))),r.uniforms.add(new n.J("vvSizeFactor",(e=>e.vvSizeFactor))),r.uniforms.add(new l.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new n.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(c.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(c.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?c.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(c.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",d),t.hasVvInstancing&&r.uniforms.add([new s("vvColorValues",(e=>e.vvColorValues),d),new a("vvColorColors",(e=>e.vvColorColors),d)]),r.code.add(c.H`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.hasVvInstancing?c.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(c.H`vec4 vvColor() { return vec4(1.0); }`)}},50213:function(e,t,r){r.d(t,{F:function(){return n},b:function(){return i}});const n=.1,i=.001},82175:function(e,t,r){r.d(t,{z:function(){return c}});var n=r(50213),i=r(65982);function o(e){e.fragment.code.add(i.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${i.H.float(n.b)}) { discard; } }
  `)}r(91812),r(51313);var a=r(73893),s=r(81789);function c(e,t){l(e,t,new a.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function l(e,t,r){const n=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||n.uniforms.add(r),t.alphaDiscardMode){case s.JJ.Blend:return e.include(o);case s.JJ.Opaque:n.code.add(i.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:n.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},9674:function(e,t,r){r.d(t,{G:function(){return u},R:function(){return f}});var n=r(47001),i=r(12686),o=r(97848),a=r(85381),s=r(8953),c=r(87035),l=r(65982);function u(e){e.fragment.uniforms.add(new c.N("projInfo",((e,t)=>d(t)))),e.fragment.uniforms.add(new s.A("zScale",((e,t)=>f(t)))),e.fragment.code.add(l.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function d(e){const t=e.camera.projectionMatrix;return 0===t[11]?(0,o.s)(h,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,o.s)(h,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const h=(0,a.c)();function f(e){return 0===e.camera.projectionMatrix[11]?(0,n.s)(m,0,1):(0,n.s)(m,1,0)}const m=(0,i.a)()},7158:function(e,t,r){r.d(t,{$:function(){return i}});var n=r(65982);function i({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(n.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}},76161:function(e,t,r){r.d(t,{y:function(){return a}});var n=r(7738),i=r(65982);function o(e){e.code.add(i.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function a(e){e.include(o),e.code.add(i.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.H.int(n.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.H.int(n.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(n.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.H.int(n.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.H.int(n.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},33451:function(e,t,r){r.d(t,{n:function(){return i}});var n=r(65982);function i(e){e.code.add(n.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},10262:function(e,t,r){r.d(t,{hY:function(){return f},Sv:function(){return m},_8:function(){return g}});var n=r(51802),i=r(22947),o=r(65554),a=r(74674),s=r(69783),c=r(19207),l=r(91812),u=r(51313);class d extends l.x{constructor(e,t){super(e,"mat4",u.P.Draw,((r,n,i)=>r.setUniformMatrix4fv(e,t(n,i))))}}var h=r(74824);function f(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.Z):e.uniforms.add(new s.B("cameraPosition",((e,t)=>(0,o.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function m(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add([new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new d("view",((e,t)=>(0,n.w)(p,t.camera.viewMatrix,e.origin))),new s.B("localOrigin",(e=>e.origin))]);const r=e=>(0,o.s)(v,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add([new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new h.g("view",((e,t)=>(0,n.w)(p,t.camera.viewMatrix,r(t)))),new c.J("localOrigin",((e,t)=>r(t)))])}const p=(0,i.c)(),v=(0,a.c)();function g(e){e.uniforms.add(new h.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},76363:function(e,t,r){r.d(t,{aU:function(){return o},b6:function(){return s},o_:function(){return i},w_:function(){return a}});var n=r(65982);const i="Size",o="InvSize";function a(e,t,r=!1,a=0){if(e.hasWebGL2Context){const e=n.H`vec2(textureSize(${t}, ${n.H.int(a)}))`;return r?"(1.0 / "+e+")":e}return r?t+o:t+i}function s(e,t,r,i=null,a=0){if(e.hasWebGL2Context)return n.H`texelFetch(${t}, ivec2(${r}), ${n.H.int(a)})`;let s=n.H`texture2D(${t}, ${r} * `;return s+=i?n.H`(${i}))`:n.H`${t+o})`,s}},55641:function(e,t,r){r.d(t,{q:function(){return o}});var n=r(91812),i=r(51313);class o extends n.x{constructor(e,t){super(e,"vec2",i.P.Draw,((r,n,i,o)=>r.setUniform2fv(e,t(n,i,o))))}}},8953:function(e,t,r){r.d(t,{A:function(){return o}});var n=r(91812),i=r(51313);class o extends n.x{constructor(e,t){super(e,"vec2",i.P.Pass,((r,n,i)=>r.setUniform2fv(e,t(n,i))))}}},69783:function(e,t,r){r.d(t,{B:function(){return o}});var n=r(91812),i=r(51313);class o extends n.x{constructor(e,t){super(e,"vec3",i.P.Draw,((r,n,i,o)=>r.setUniform3fv(e,t(n,i,o))))}}},19207:function(e,t,r){r.d(t,{J:function(){return o}});var n=r(91812),i=r(51313);class o extends n.x{constructor(e,t){super(e,"vec3",i.P.Pass,((r,n,i)=>r.setUniform3fv(e,t(n,i))))}}},87035:function(e,t,r){r.d(t,{N:function(){return o}});var n=r(91812),i=r(51313);class o extends n.x{constructor(e,t){super(e,"vec4",i.P.Pass,((r,n,i)=>r.setUniform4fv(e,t(n,i))))}}},73893:function(e,t,r){r.d(t,{p:function(){return o}});var n=r(91812),i=r(51313);class o extends n.x{constructor(e,t){super(e,"float",i.P.Pass,((r,n,i)=>r.setUniform1f(e,t(n,i))))}}},25039:function(e,t,r){r.d(t,{_:function(){return o}});var n=r(91812),i=r(51313);class o extends n.x{constructor(e,t){super(e,"int",i.P.Pass,((r,n,i)=>r.setUniform1i(e,t(n,i))))}}},29577:function(e,t,r){r.d(t,{j:function(){return o}});var n=r(91812),i=r(51313);class o extends n.x{constructor(e,t){super(e,"mat3",i.P.Draw,((r,n,i)=>r.setUniformMatrix3fv(e,t(n,i))))}}},72407:function(e,t,r){r.d(t,{c:function(){return o}});var n=r(91812),i=r(51313);class o extends n.x{constructor(e,t){super(e,"mat3",i.P.Pass,((r,n,i)=>r.setUniformMatrix3fv(e,t(n,i))))}}},74824:function(e,t,r){r.d(t,{g:function(){return o}});var n=r(91812),i=r(51313);class o extends n.x{constructor(e,t){super(e,"mat4",i.P.Pass,((r,n,i)=>r.setUniformMatrix4fv(e,t(n,i))))}}},63914:function(e,t,r){r.d(t,{kG:function(){return c}});r(57658);var n=r(22130),i=r(93622),o=r(8693);const a=i.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){a.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const n of Object.keys(r))r[n]!==e[n]&&t.add(n);for(const n of Object.keys(e))r[n]!==e[n]&&t.add(n);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class c extends s{constructor(){super(...arguments),this.vertex=new d,this.fragment=new d,this.attributes=new h,this.varyings=new f,this.extensions=new m,this.constants=new p}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(),i="vertex"===e?this.vertex:this.fragment,o=i.uniforms.generateSource(),a=i.code.generateSource(),s="vertex"===e?g:v,c=this.constants.generateSource().concat(i.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${a.join("\n")}`}generateBind(e,t){const r=new Map;this.vertex.uniforms.entries.forEach((t=>{const n=t.bind[e];(0,o.pC)(n)&&r.set(t.name,n)})),this.fragment.uniforms.entries.forEach((t=>{const n=t.bind[e];(0,o.pC)(n)&&r.set(t.name,n)}));const n=Array.from(r.values()),i=n.length;return(e,r,o)=>{for(let a=0;a<i;++a)n[a](t,e,r,o)}}}class l{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if((0,o.Wi)(e))a.error(`Trying to add null Uniform from ${(new Error).stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new n.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map((e=>(0,o.pC)(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class u{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class d extends s{constructor(){super(...arguments),this.uniforms=new l,this.code=new u,this.constants=new p}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?m.ALLOWLIST_VERTEX:m.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}m.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],m.ALLOWLIST_VERTEX=[];class p{constructor(){this._entries=new Set}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=p._numberToFloatStr(r);break;case"int":n=p._numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])},                            ${p._numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])},                             ${p._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>p._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${n};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const v="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",g="precision highp float;\nprecision highp sampler2D;"},17826:function(e,t,r){r.d(t,{F:function(){return h},R:function(){return d}});r(57658);var n=r(8693),i=r(47001),o=r(12686),a=r(76363),s=r(55641),c=r(73445),l=r(91812),u=r(51313);class d extends l.x{constructor(e,t){super(e,"sampler2D",u.P.Draw,((r,n,i)=>r.bindTexture(e,t(n,i))))}}function h(e,t,r=c.D.None){const l=[new d(e,t)];if(r&c.D.Size){const r=e+a.o_;l.push(new s.q(r,((e,r)=>{const a=t(e,r);return(0,n.pC)(a)?(0,i.s)(f,a.descriptor.width,a.descriptor.height):o.Z})))}if(r&c.D.InvSize){const r=e+a.aU;l.push(new s.q(r,((e,r)=>{const a=t(e,r);return(0,n.pC)(a)?(0,i.s)(f,1/a.descriptor.width,1/a.descriptor.height):o.Z})))}return l}const f=(0,o.a)()},84970:function(e,t,r){r.d(t,{A:function(){return d},J:function(){return h}});r(57658);var n=r(8693),i=r(47001),o=r(12686),a=r(76363),s=r(8953),c=r(73445),l=r(91812),u=r(51313);class d extends l.x{constructor(e,t){super(e,"sampler2D",u.P.Pass,((r,n,i)=>r.bindTexture(e,t(n,i))))}}function h(e,t,r=c.D.None){const l=[new d(e,t)];if(r&c.D.Size){const r=e+a.o_;l.push(new s.A(r,((e,r)=>{const a=t(e,r);return(0,n.pC)(a)?(0,i.s)(f,a.descriptor.width,a.descriptor.height):o.Z})))}if(r&c.D.InvSize){const r=e+a.aU;l.push(new s.A(r,((e,r)=>{const a=t(e,r);return(0,n.pC)(a)?(0,i.s)(f,1/a.descriptor.width,1/a.descriptor.height):o.Z})))}return l}const f=(0,o.a)()},73445:function(e,t,r){var n;r.d(t,{D:function(){return n}}),function(e){e[e.None=0]="None",e[e.Size=1]="Size",e[e.InvSize=2]="InvSize"}(n||(n={}))},91812:function(e,t,r){r.d(t,{x:function(){return o}});var n=r(8693),i=r(51313);class o{constructor(e,t,r,o,a=null){this.name=e,this.type=t,this.arraySize=a,this.bind={[i.P.Pass]:null,[i.P.Draw]:null},(0,n.pC)(r)&&(0,n.pC)(o)&&(this.bind[r]=o)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},65982:function(e,t,r){r.d(t,{H:function(){return o},K:function(){return i}});class n{}const i=n;function o(e,...t){let r="";for(let n=0;n<t.length;n++)r+=e[n]+t[n];return r+=e[e.length-1],r}!function(e){function t(e){return Math.round(e).toString()}function r(e){return e.toPrecision(8)}e.int=t,e.float=r}(o||(o={}))},51313:function(e,t,r){var n;r.d(t,{P:function(){return n}}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(n||(n={}))},68205:function(e,t,r){r.d(t,{J:function(){return n}});class n{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},20572:function(e,t,r){r.d(t,{A:function(){return o}});var n=r(8693),i=r(17923);class o{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,n.M2)(this._program),this._pipeline=this._configuration=null}reload(e){(0,n.M2)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return i.MX.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}}},33274:function(e,t,r){r.d(t,{m:function(){return i},o:function(){return o}});r(57658);var n=r(65982);class i extends n.K{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function o(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const n=t._parameterNames.length-1,i=e.count||2,o=Math.ceil(Math.log2(i)),a=t._parameterBits??[0];let s=0;for(;a[s]+o>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const c=a[s],l=(1<<o)-1<<c;a[s]+=o,Object.defineProperty(t,r,{get(){return this[n]},set(e){if(this[n]!==e&&(this[n]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~l|+e<<c&l,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}},66758:function(e,t,r){r.d(t,{a:function(){return n}});class n{constructor(e,t,r=!1,n=t){this.data=e,this.size=t,this.exclusive=r,this.stride=n}}},48369:function(e,t,r){r.d(t,{c:function(){return i}});var n=r(24586);class i{constructor(){this.id=(0,n.D)()}unload(){}}},30505:function(e,t,r){var n;r.d(t,{U:function(){return n}}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(n||(n={}))},85018:function(e,t,r){r.d(t,{i:function(){return i}});var n=r(30150);const i=new Map([[n.T.POSITION,0],[n.T.NORMAL,1],[n.T.UV0,2],[n.T.COLOR,3],[n.T.SIZE,4],[n.T.TANGENT,4],[n.T.AUXPOS1,5],[n.T.SYMBOLCOLOR,5],[n.T.AUXPOS2,6],[n.T.FEATUREATTRIBUTE,6],[n.T.INSTANCEFEATUREATTRIBUTE,6],[n.T.INSTANCECOLOR,7],[n.T.OBJECTANDLAYERIDCOLOR,7],[n.T.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[n.T.MODEL,8],[n.T.MODELNORMAL,12],[n.T.MODELORIGINHI,11],[n.T.MODELORIGINLO,15]])},20901:function(e,t,r){r.d(t,{F:function(){return c}});var n=r(8693),i=r(92454),o=r(65982),a=r(81789);class s{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return a.Rw.LOADED}}class c extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,n.RY)(this._texture),this._textureNormal=(0,n.RY)(this._textureNormal),this._textureEmissive=(0,n.RY)(this._textureEmissive),this._textureOcclusion=(0,n.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,n.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Rw.LOADED:a.Rw.LOADING}get textureBindParameters(){return new l((0,n.pC)(this._texture)?this._texture.glTexture:null,(0,n.pC)(this._textureNormal)?this._textureNormal.glTexture:null,(0,n.pC)(this._textureEmissive)?this._textureEmissive.glTexture:null,(0,n.pC)(this._textureOcclusion)?this._textureOcclusion.glTexture:null,(0,n.pC)(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){((0,n.Wi)(this._texture)||e!==this._texture.id)&&(this._texture=(0,n.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if((0,n.Wi)(e))return void t(null);const r=this._textureRepository.acquire(e);if((0,i.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,n.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class l extends o.K{constructor(e=null,t=null,r=null,n=null,i=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=n,this.textureMetallicRoughness=i}}},66795:function(e,t,r){r.d(t,{$z:function(){return o},DX:function(){return u},mi:function(){return i},p:function(){return l}});r(23767),r(8585),r(68696);var n=r(928);function i(e){if(Array.isArray(e)){if(e.length<n.DB)return e;for(const t of e)if(t>=65536)return new Uint32Array(e);return new Uint16Array(e)}if(e.length<n.DB)return Array.from(e);if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}function o(e){const t=3*e;return t<=n.DB?new Array(t):t<=65536?new Uint16Array(t):new Uint32Array(t)}let a=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const s=[0],c=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function l(e){if(1===e)return s;if(e<n.DB)return Array.from(new Uint16Array(c.buffer,0,e));if(e<c.length)return new Uint16Array(c.buffer,0,e);if(e>a.length){const t=Math.max(2*a.length,e);a=new Uint32Array(t);for(let e=0;e<a.length;e++)a[e]=e}return new Uint32Array(a.buffer,0,e)}function u(e){if(1===e)return s;if(e<n.DB)return Array.from(new Uint16Array(c.buffer,0,e));if(e<c.length)return new Uint16Array(c.slice(0,e));if(e>a.length){const t=new Uint32Array(e);for(let e=0;e<t.length;e++)t[e]=e;return t}return new Uint32Array(a.slice(0,e))}},40449:function(e,t,r){r.d(t,{F5:function(){return u},yD:function(){return o}});var n=r(8693),i=r(74674);r(65982);var o,a=r(48369),s=r(30505),c=r(85018),l=r(47592);class u extends a.c{constructor(e,t){super(),this.type=s.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=c.i,this._pp0=(0,i.f)(0,0,1),this._pp1=(0,i.f)(0,0,0),this._parameters=(0,l.Uf)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,l.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,n.pC)(this.repository)&&this.repository.materialChanged(this)}intersectDraped(e,t,r,n,i,o){return this._pp0[0]=this._pp1[0]=n[0],this._pp0[1]=this._pp1[1]=n[1],this.intersect(e,t,r,this._pp0,this._pp1,i)}}!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(o||(o={}))},25749:function(e,t,r){r.d(t,{Bh:function(){return f},IB:function(){return c},j7:function(){return l},je:function(){return h},ve:function(){return u},wu:function(){return a}});var n=r(51780),i=r(17923),o=r(9408);const a=(0,o.wK)(i.zi.SRC_ALPHA,i.zi.ONE,i.zi.ONE_MINUS_SRC_ALPHA,i.zi.ONE_MINUS_SRC_ALPHA),s=(0,o["if"])(i.zi.ONE,i.zi.ONE),c=(0,o["if"])(i.zi.ZERO,i.zi.ONE_MINUS_SRC_ALPHA);function l(e){return e===n.A.FrontFace?null:e===n.A.Alpha?c:s}const u=5e5,d={factor:-1,units:-2};function h(e){return e?d:null}function f(e,t=i.wb.LESS){return e===n.A.NONE||e===n.A.FrontFace?t:i.wb.LEQUAL}},7436:function(e,t,r){r.d(t,{$:function(){return s}});r(57658);var n=r(8693),i=r(88071),o=r(51313),a=r(58523);class s{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new i.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(o.P.Pass,this),this.bindDraw=t.generateBind(o.P.Draw,this),this._fragmentUniforms=(0,a.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,n.Wi)(t)||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,n.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},51780:function(e,t,r){var n;r.d(t,{A:function(){return n}}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(n||(n={}))},54131:function(e,t,r){r.d(t,{hu:function(){return o},yK:function(){return a}});r(12686),r(97848);var n=r(85381);(0,n.c)();class i{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e){t=t||"Assertion";const e=new Error(t).stack;throw new i(`${t} at ${e}`)}}function a(e,t,r,n){let i,o=(r[0]-e[0])/t[0],a=(n[0]-e[0])/t[0];o>a&&(i=o,o=a,a=i);let s=(r[1]-e[1])/t[1],c=(n[1]-e[1])/t[1];if(s>c&&(i=s,s=c,c=i),o>c||s>a)return!1;s>o&&(o=s),c<a&&(a=c);let l=(r[2]-e[2])/t[2],u=(n[2]-e[2])/t[2];return l>u&&(i=l,l=u,u=i),!(o>u||l>a)&&(u<a&&(a=u),!(a<0))}},30150:function(e,t,r){var n;r.d(t,{T:function(){return n}}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.OBJECTANDLAYERIDCOLOR_INSTANCED="objectAndLayerIdColor_instanced"}(n||(n={}))},98786:function(e,t,r){r.d(t,{ow:function(){return h}});r(23767),r(8585),r(68696);var n=r(85018),i=r(30150),o=r(17923),a=r(64816);new a.G(i.T.POSITION,3,o.g.FLOAT,0,12),new a.G(i.T.POSITION,3,o.g.FLOAT,0,20),new a.G(i.T.UV0,2,o.g.FLOAT,12,20),new a.G(i.T.POSITION,3,o.g.FLOAT,0,32),new a.G(i.T.NORMAL,3,o.g.FLOAT,12,32),new a.G(i.T.UV0,2,o.g.FLOAT,24,32),new a.G(i.T.POSITION,3,o.g.FLOAT,0,16),new a.G(i.T.COLOR,4,o.g.UNSIGNED_BYTE,12,16);const s=[new a.G(i.T.POSITION,2,o.g.FLOAT,0,8)],c=[new a.G(i.T.POSITION,2,o.g.FLOAT,0,16),new a.G(i.T.UV0,2,o.g.FLOAT,8,16)];var l=r(50659);class u extends l.U{}var d=r(15625);r(29964);function h(e,t=s,r=n.i,i=-1,a=1){let l=null;return l=t===c?new Float32Array([i,i,0,0,a,i,1,0,i,a,0,1,a,a,1,1]):new Float32Array([i,i,a,i,i,a,a,a]),new u(e,r,{geometry:t},{geometry:d.f.createVertex(e,o.l1.STATIC_DRAW,l)})}},47592:function(e,t,r){r.d(t,{FZ:function(){return H},Uf:function(){return E},Bw:function(){return x},LO:function(){return L},Hx:function(){return R}});r(57658);var n=r(15055),i=r(67752),o=r(8693),a=r(65554),s=r(74674),c=r(37740),l=r(30505);r(53838);function u(e){return Math.abs(e*e*e)}function d(e,t,r){const n=r.parameters,i=r.paddingPixelsOverride;return p.scale=Math.min(n.divisor/(t-n.offset),1),p.factor=u(e),p.minPixelSize=n.minPixelSize,p.paddingPixels=i,p}function h(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function f(e,t){return Math.max((0,i.t7)(e*t.scale,e,t.factor),h(e,t))}function m(e,t,r,n){return f(e,d(t,r,n))}(0,i.Vl)(10),(0,i.Vl)(12),(0,i.Vl)(70),(0,i.Vl)(40);const p={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var v=r(54131),g=r(30150);const _=(0,c.Ue)();function x(e,t,r,n,i,o){if(e.visible)if(e.boundingInfo){(0,v.hu)(e.type===l.U.Mesh);const a=t.tolerance;b(e.boundingInfo,r,n,a,i,o)}else{const t=e.indices.get(g.T.POSITION),a=e.vertexAttributes.get(g.T.POSITION);A(r,n,0,t.length/3,t,a,void 0,i,o)}}const T=(0,s.c)();function b(e,t,r,n,i,a){if((0,o.Wi)(e))return;const s=O(t,r,T);if((0,c.op)(_,e.bbMin),(0,c.Tn)(_,e.bbMax),(0,o.pC)(i)&&i.applyToAabb(_),P(_,t,s,n)){const{primitiveIndices:o,indices:s,position:c}=e,l=o?o.length:s.length/3;if(l>D){const o=e.getChildren();if(void 0!==o){for(const e of o)b(e,t,r,n,i,a);return}}A(t,r,0,l,s,c,o,i,a)}}const S=(0,s.c)();function A(e,t,r,n,i,a,s,c,l){if(s)return y(e,t,r,n,i,a,s,c,l);const{data:u,stride:d}=a,h=e[0],f=e[1],m=e[2],p=t[0]-h,v=t[1]-f,g=t[2]-m;for(let _=r,x=3*r;_<n;++_){let e=d*i[x++],t=u[e++],r=u[e++],n=u[e];e=d*i[x++];let a=u[e++],s=u[e++],T=u[e];e=d*i[x++];let b=u[e++],A=u[e++],y=u[e];(0,o.pC)(c)&&([t,r,n]=c.applyToVertex(t,r,n,_),[a,s,T]=c.applyToVertex(a,s,T,_),[b,A,y]=c.applyToVertex(b,A,y,_));const w=a-t,C=s-r,O=T-n,P=b-t,I=A-r,R=y-n,E=v*R-I*g,L=g*P-R*p,N=p*I-P*v,H=w*E+C*L+O*N;if(Math.abs(H)<=Number.EPSILON)continue;const D=h-t,F=f-r,z=m-n,B=D*E+F*L+z*N;if(H>0){if(B<0||B>H)continue}else if(B>0||B<H)continue;const V=F*O-C*z,U=z*w-O*D,G=D*C-w*F,W=p*V+v*U+g*G;if(H>0){if(W<0||B+W>H)continue}else if(W>0||B+W<H)continue;const $=(P*V+I*U+R*G)/H;$>=0&&l($,M(w,C,O,P,I,R,S),_,!1)}}function y(e,t,r,n,i,a,s,c,l){const{data:u,stride:d}=a,h=e[0],f=e[1],m=e[2],p=t[0]-h,v=t[1]-f,g=t[2]-m;for(let _=r;_<n;++_){const e=s[_];let t=3*e,r=d*i[t++],n=u[r++],a=u[r++],x=u[r];r=d*i[t++];let T=u[r++],b=u[r++],A=u[r];r=d*i[t];let y=u[r++],w=u[r++],C=u[r];(0,o.pC)(c)&&([n,a,x]=c.applyToVertex(n,a,x,_),[T,b,A]=c.applyToVertex(T,b,A,_),[y,w,C]=c.applyToVertex(y,w,C,_));const O=T-n,P=b-a,I=A-x,R=y-n,E=w-a,L=C-x,N=v*L-E*g,H=g*R-L*p,D=p*E-R*v,F=O*N+P*H+I*D;if(Math.abs(F)<=Number.EPSILON)continue;const z=h-n,B=f-a,V=m-x,U=z*N+B*H+V*D;if(F>0){if(U<0||U>F)continue}else if(U>0||U<F)continue;const G=B*I-P*V,W=V*O-I*z,$=z*P-O*B,k=p*G+v*W+g*$;if(F>0){if(k<0||U+k>F)continue}else if(k>0||U+k<F)continue;const j=(R*G+E*W+L*$)/F;j>=0&&l(j,M(O,P,I,R,E,L,S),e,!1)}}const w=(0,s.c)(),C=(0,s.c)();function M(e,t,r,n,i,o,s){return(0,a.s)(w,e,t,r),(0,a.s)(C,n,i,o),(0,a.f)(s,w,C),(0,a.n)(s,s),s}function O(e,t,r){return(0,a.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function P(e,t,r,n){return I(e,t,r,n,1/0)}function I(e,t,r,n,i){const o=(e[0]-n-t[0])*r[0],a=(e[3]+n-t[0])*r[0];let s=Math.min(o,a),c=Math.max(o,a);const l=(e[1]-n-t[1])*r[1],u=(e[4]+n-t[1])*r[1];if(c=Math.min(c,Math.max(l,u)),c<0)return!1;if(s=Math.max(s,Math.min(l,u)),s>c)return!1;const d=(e[2]-n-t[2])*r[2],h=(e[5]+n-t[2])*r[2];return c=Math.min(c,Math.max(d,h)),!(c<0)&&(s=Math.max(s,Math.min(d,h)),!(s>c)&&s<i)}function R(e,t,r,n,a){let s=(r.screenLength||0)*e.pixelRatio;(0,o.pC)(a)&&(s=m(s,n,t,a));const c=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,i.uZ)(c*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function E(e,t){const r=t?E(t):{};for(const n in e){let t=e[n];t&&t.forEach&&(t=N(t)),null==t&&n in r||(r[n]=t)}return r}function L(e,t){let r=!1;for(const i in t){const o=t[i];void 0!==o&&(Array.isArray(o)?null===e[i]?(e[i]=o.slice(),r=!0):(0,n.Vx)(e[i],o)&&(r=!0):e[i]!==o&&(r=!0,e[i]=o))}return r}function N(e){const t=[];return e.forEach((e=>t.push(e))),t}const H={multiply:1,ignore:2,replace:3,tint:4},D=1e3},64816:function(e,t,r){r.d(t,{G:function(){return n}});class n{constructor(e,t,r,n,i,o=!1,a=0){this.name=e,this.count=t,this.type=r,this.offset=n,this.stride=i,this.normalized=o,this.divisor=a}}},12470:function(e,t,r){r.d(t,{GB:function(){return o},LF:function(){return n},U8:function(){return i}});r(23767),r(8585),r(68696);function n(e,t,r){for(let n=0;n<r;++n)t[2*n]=e[n],t[2*n+1]=e[n]-t[2*n]}function i(e,t){const r=e.length;for(let n=0;n<r;++n)a[0]=e[n],t[n]=a[0];return t}function o(e,t){const r=e.length;for(let n=0;n<r;++n)a[0]=e[n],a[1]=e[n]-a[0],t[n]=a[1];return t}const a=new Float32Array(2)},9408:function(e,t,r){r.d(t,{BK:function(){return d},LZ:function(){return u},if:function(){return o},jp:function(){return U},sm:function(){return T},wK:function(){return a},zp:function(){return l}});var n=r(81789),i=r(17923);function o(e,t,r=i.db.ADD,n=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function a(e,t,r,n,o=i.db.ADD,a=i.db.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:n,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:i.LR.BACK,mode:i.Wf.CCW},c={face:i.LR.FRONT,mode:i.Wf.CCW},l=e=>e===n.Vr.Back?s:e===n.Vr.Front?c:null,u={zNear:0,zFar:1},d={r:!0,g:!0,b:!0,a:!0};function h(e){return A.intern(e)}function f(e){return w.intern(e)}function m(e){return M.intern(e)}function p(e){return P.intern(e)}function v(e){return R.intern(e)}function g(e){return L.intern(e)}function _(e){return H.intern(e)}function x(e){return F.intern(e)}function T(e){return B.intern(e)}class b{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function S(e){return"["+e.join(",")+"]"}const A=new b(y,(e=>({__tag:"Blending",...e})));function y(e){return e?S([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const w=new b(C,(e=>({__tag:"Culling",...e})));function C(e){return e?S([e.face,e.mode]):null}const M=new b(O,(e=>({__tag:"PolygonOffset",...e})));function O(e){return e?S([e.factor,e.units]):null}const P=new b(I,(e=>({__tag:"DepthTest",...e})));function I(e){return e?S([e.func]):null}const R=new b(E,(e=>({__tag:"StencilTest",...e})));function E(e){return e?S([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const L=new b(N,(e=>({__tag:"DepthWrite",...e})));function N(e){return e?S([e.zNear,e.zFar]):null}const H=new b(D,(e=>({__tag:"ColorWrite",...e})));function D(e){return e?S([e.r,e.g,e.b,e.a]):null}const F=new b(z,(e=>({__tag:"StencilWrite",...e})));function z(e){return e?S([e.mask]):null}const B=new b(V,(e=>({blending:h(e.blending),culling:f(e.culling),polygonOffset:m(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:_(e.colorWrite),stencilWrite:x(e.stencilWrite)})));function V(e){return e?S([y(e.blending),C(e.culling),O(e.polygonOffset),I(e.depthTest),E(e.stencilTest),N(e.depthWrite),D(e.colorWrite),z(e.stencilWrite)]):null}class U{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,t,r,n){return(r||e!==t)&&(n(e),this._pipelineInvalid=!0),e}}}}]);