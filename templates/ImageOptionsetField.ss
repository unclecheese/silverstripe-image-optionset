<ul $AttributesHTML>
    <% loop $Options %>
        <li class="$Class" style="width:{$Top.ImageWidth}px;">
            <input id="$ID" class="radio" name="$Name" type="radio" value="$Value"<% if $isChecked %> checked<% end_if %><% if $isDisabled %> disabled<% end_if %> />
            <label for="$ID">
                <div class="imageoptionsetfield-image">
                    <div style="$Top.StyleAttributes($Value)"></div>
                </div>
                <div class="imageoptionsetfield-title">
                    $Title
                </div>
            </label>
        </li>
    <% end_loop %>
</ul>
