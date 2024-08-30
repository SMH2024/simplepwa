precision mediump float;

varying vec2 vTexCoord;
uniform sampler2D u_texture;
uniform vec2 u_resolution;
uniform float u_time;

void main() {
    // Normalize coordinates
    vec2 uv = vTexCoord;

    // Sample the texture
    vec4 texColor = texture2D(u_texture, uv);

    // Create a dynamic color effect
    texColor.rgb *= 0.5 + 0.5 * sin(u_time + uv.xyx * 10.0);

    // Output the final color
    gl_FragColor = texColor;
}
