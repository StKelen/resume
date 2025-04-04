export const depthShader = {
  uniforms: {
    depth: { value: null },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform sampler2D tDepth;

    void main() {
        float depth = texture2D( tDepth, vUv ).x;
        // Shades of grey, the closer the lighter
        gl_FragColor.rgb = 1.0 - vec3(depth);
        gl_FragColor.a = 1.0;
    }
`,
};
