<ul $AttributesHTML>
    <% loop $Options %>
        <li class="$Class">
            <input id="$ID" class="radio" name="$Name" type="radio" value="$Value"<% if $isChecked %> checked<% end_if %><% if $isDisabled %> disabled<% end_if %> />
            <label for="$ID">
                <div class="imageoptionsetfield-image">
                    $Top.ImageForItem($Value)
                </div>
                <div class="imageoptionsetfield-title">
                    $Title
                </div>
            </label>
        </li>
    <% end_loop %>
</ul>
