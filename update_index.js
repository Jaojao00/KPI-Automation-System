const fs = require('fs');
let content = fs.readFileSync('public/index.html', 'utf8');

// Dashboard Check Report config inputs
content = content.replace(
    /<div class="cr-kpi-input-group">\s*<label>Ngày CP:<\/label>\s*<input type="number" v-model="systemConfig.target_cp" class="form-input" style="width:80px;">\s*<\/div>/g,
    <div class="cr-kpi-input-group">
        <label>Ngày CP (Min-Max):</label>
        <div style="display: flex; gap: 0.25rem;">
            <input type="number" v-model="systemConfig.target_cp_min" class="form-input" style="width:50px;">
            <input type="number" v-model="systemConfig.target_cp_max" class="form-input" style="width:50px;">
        </div>
    </div>
);

content = content.replace(
    /<div class="cr-kpi-input-group">\s*<label>Ngày Mini:<\/label>\s*<input type="number" v-model="systemConfig.target_mini" class="form-input" style="width:80px;">\s*<\/div>/g,
    <div class="cr-kpi-input-group">
        <label>Ngày Mini (Min-Max):</label>
        <div style="display: flex; gap: 0.25rem;">
            <input type="number" v-model="systemConfig.target_mini_min" class="form-input" style="width:50px;">
            <input type="number" v-model="systemConfig.target_mini_max" class="form-input" style="width:50px;">
        </div>
    </div>
);

// Automation Import config inputs
const configReplace =                                 <div>
                                    <label style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--text-muted);">Số ngày CP (Min - Max):</label>
                                    <div style="display: flex; gap: 0.5rem;">
                                        <input type="number" v-model="systemConfig.target_cp_min" class="form-input" style="width: 70px;">
                                        <input type="number" v-model="systemConfig.target_cp_max" class="form-input" style="width: 70px;">
                                    </div>
                                </div>
                                <div>
                                    <label style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--text-muted);">Số ngày Mini (Min - Max):</label>
                                    <div style="display: flex; gap: 0.5rem;">
                                        <input type="number" v-model="systemConfig.target_mini_min" class="form-input" style="width: 70px;">
                                        <input type="number" v-model="systemConfig.target_mini_max" class="form-input" style="width: 70px;">
                                    </div>
                                </div>;

content = content.replace(/<div>\s*<label[^>]*>Số\s*ngày CP \(yêu cầu\):<\/label>\s*<input type="number" v-model="systemConfig\.target_cp" class="form-input"\s*style="width: 150px;">\s*<\/div>\s*<div>\s*<label[^>]*>Số\s*ngày Mini \(yêu cầu\):<\/label>\s*<input type="number" v-model="systemConfig\.target_mini" class="form-input"\s*style="width: 150px;">\s*<\/div>/g, configReplace);

fs.writeFileSync('public/index.html', content, 'utf8');
